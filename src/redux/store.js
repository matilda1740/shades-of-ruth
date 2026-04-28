import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './reducers/productsReducer';
import filtersReducer from './reducers/filtersReducer';
import cartListReducer from './reducers/cartListReducer';


const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    cartList: cartListReducer
  }
})


export default store;