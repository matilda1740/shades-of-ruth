import axios from 'axios'

const customInstance = axios.create({
     baseURL: '',
    headers: {
        'content-type':'application/json',
    }
});
export default customInstance;


