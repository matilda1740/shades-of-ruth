
export const sortByAlphabet = (payload) => {
    return { 
        type: 'SORT_BY_ALPHABET',
        payload
    }
};

// export const sortByPrice = (payload) => {
//     return { 
//         type: 'SORT_BY_PRICE',
//         payload
//     }
// };

// export const filterByPrice = (payload) => {
//     return { 
//         type: 'FILTER_BY_PRICE',
//         payload
//     }
// };

export const filterByValue = (payload) => {
    return { 
        type: 'FILTER_BY_VALUE',
        payload
    }
};