import axios from 'axios'

const customInstance = axios.create({
    //  baseURL: '...',
    headers: {
        'content-type':'application/json',
    },

});
export default customInstance;
// export default {
//     // GET REQUESTS
//     getData: () => {
//     customInstance({ 
//         'method':'GET',
//         'url':'/public/data.json',

//     })
//     },
//     //    // POSTs
//     // postUserInfo: () => {

//     // }
// }

