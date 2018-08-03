import { normalize, schema } from "normalizr";
import { camelizeKeys } from "humps";
import axios from "axios";
import { CALL_API } from "../constants";

const API_ROOT = "http://localhost4000";

const callApi = (endpoint, schema, method, bodyReq) => {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
    console.log(endpoint);
    return axios({
            method: method,
            url: endpoint,
            data: bodyReq
        })
        .then(response => {
            if (response.status !== 200) {
                return Promise.reject(response)
            }
            if (endpoint === '/login') {
                localStorage.setItem('headers', JSON.stringify(response.headers))
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            const camelizedJson = camelizeKeys(response.data);
            return Object.assign({}, normalize(camelizedJson, schema))
        })
        .catch(err => {
            console.log(err)
        })
}

const userSchema = new schema.Entity('users', {
    idAttribute: user => user.username.toLowerCase()
  })

const commentSchema = new schema.Entity('comments', {
    commenter: userSchema
});


const postSchema = new schema.Entity('posts', {
    author: userSchema,
    comments: [commentSchema]
    
})

export const Schemas = {
    USER: userSchema,
    USER_ARRAY: [userSchema],
    POST: postSchema,
    POST_ARRAY: [postSchema]
}

export default store => next => action => {
    const callAPI = action[CALL_API];
    if (callAPI) {
        let {endpoint} = callAPI;
        const { types, schema, method, bodyReq } = callAPI

        if (typeof endpoint === 'function') {
            endpoint = endpoint(store.getState())
        }
        
        if (typeof endpoint !== 'string') {
            throw new Error('Specify a string endpoint URL.')
        }
        if (!schema) {
            throw new Error('Specify one of the exported Schemas.')
        }
        if (!Array.isArray(types) || types.length !== 3) {
            throw new Error('Expected an array of three action types.')
        }
        if (!types.every(type => typeof type === 'string')) {
            throw new Error('Expected action types to be strings.')
        }

        const actionWith = data => {
            const finalAction = Object.assign({}, action, data)
            delete finalAction[CALL_API]
            return finalAction
        }

        const [ requestType, successType, failureType ] = types;
        next(actionWith({ type: requestType }))

        return callApi(endpoint, schema, method, bodyReq)
                .then(response => next(actionWith({
                        type: successType,
                        response
                    }))
                )
                .catch(error => next(actionWith({
                    type: failureType,
                    error: error.message
                })))
    }
}