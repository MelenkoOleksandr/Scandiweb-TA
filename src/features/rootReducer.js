import { combineReducers } from '@reduxjs/toolkit'
import categoriesSlice from './categories/categoriesSlice';
import currenciesSlice from './currencies/currenciesSlice';
import currencySlice from './currency/currencySlice';
import productsSlice from './products/productsSlice';
import  productSlice  from './product/product';

const rootReducer = combineReducers({
    currencies: currenciesSlice,
    currency: currencySlice,
    products: productsSlice,
    product: productSlice,
    categories: categoriesSlice
})

export default rootReducer