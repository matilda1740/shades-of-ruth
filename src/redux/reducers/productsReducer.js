const initialState = {
  products: [],
  isLoading: false,
  error: false
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return {
        ...state,
        isLoading: true
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        products: action.payload.data
      };     
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };         
    case 'ADD_PRODUCT':
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default productsReducer;