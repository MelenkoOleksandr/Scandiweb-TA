import { combineReducers } from '@reduxjs/toolkit'
import categoriesSlice from './categories/categoriesSlice';
import currenciesSlice from './currencies/currenciesSlice';
import currencySlice from './currency/currencySlice';
import productsSlice from './products/productsSlice';

const rootReducer = combineReducers({
    currencies: currenciesSlice,
    currency: currencySlice,
    products: productsSlice,
    categories: categoriesSlice
})

export default rootReducer