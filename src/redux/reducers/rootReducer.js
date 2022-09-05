import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import filtersReducer from './filtersReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    filters: filtersReducer
});

export default rootReducer;