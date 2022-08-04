import { combineReducers } from '@reduxjs/toolkit'
import categoriesSlice from './categories/categoriesSlice';
import currenciesSlice from './currencies/currenciesSlice';
import productsSlice from './products/productsSlice';
import  productSlice  from './product/product';
import cartSlice from './cart/cartSlice';

const rootReducer = combineReducers({
    currencies: currenciesSlice,
    products: productsSlice,
    product: productSlice,
    categories: categoriesSlice,
    cart: cartSlice
})

export default rootReducer