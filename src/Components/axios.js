import axios from 'axios'

const customInstance = axios.create({
    baseURL: 'http://localhost:5002/',
    headers: {
        'content-type':'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});
export default customInstance;


