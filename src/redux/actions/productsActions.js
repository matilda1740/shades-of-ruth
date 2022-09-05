// PRODUCT ACTION CREATORS

export const fetchProductsRequest = (payload) => {
    return { 
        type: 'FETCH_PRODUCTS_REQUEST',
        payload
    }
};

export const fetchProductsSuccess = (payload) => {
    return { 
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload
    }
};

export const fetchProductsFailure = (payload) => {
    return { 
        type: 'FETCH_PRODUCTS_FAILURE',
        payload
    }
};

export const addProducts = (payload) => {
    return { 
        type: 'ADD_PRODUCT',
        payload
    }
}

export const removeProducts = (id) => {
    return { 
        type: 'REMOVE_PRODUCT',
        id
    }
}

export const selectProductById = (id) => {
    return { 
        type: 'SELECT_PRODUCT_ID',
        id
    }
};

export const updateProducts = (payload) => {
    return { 
        type: 'UPDATE_PRODUCT',
        payload
    }
}

