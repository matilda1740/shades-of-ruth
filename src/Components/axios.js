import axios from 'axios'

const customInstance = axios.create({
     baseURL: 'http://localhost:3000',
    headers: {
        'content-type':'application/json',
    }
});
export default customInstance;


