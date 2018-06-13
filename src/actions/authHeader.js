export const authHeader = () => {
     // return authorization header with jwt token
     let headers = JSON.parse(localStorage.getItem('headers'));

     if (headers['x-auth-token']) {
         return JSON.stringify(headers)
     } else {
         return { 'Content-Type': 'application/json' };
     }
}