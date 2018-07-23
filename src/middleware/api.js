import { normalize, schema } from "normalizr";
import { camelizeKeys } from "humps";

const API_ROOT = "http://localhost4000/";

const callApi = (endpoint, schema) => {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

    return fetch(fullUrl)
        .then(response => response.json().then(json => {
            const camelizedJson = camelizeKeys(json);
            return Object.assign({}, normalize(camelizedJson, schema))
        }))
        .catch(err => {
            console.log(err)
        })
}

const userSchema = new schema.Entity('users', {}, {})