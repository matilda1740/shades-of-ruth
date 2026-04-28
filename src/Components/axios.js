import axios from 'axios'

const customInstance = axios.create({
    baseURL: '/',
    headers: {
        'content-type':'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});
export default customInstance;


