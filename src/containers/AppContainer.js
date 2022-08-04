import { connect } from 'react-redux'
import { getAllCurrencies } from '../features/currencies/currenciesSlice';

import App from '../App';
import { getAllCategories } from '../features/categories/categoriesSlice';
import { restoreCart } from '../features/cart/cartSlice';

const mapStateToProps = state => ({
    isContentLoaded: !!(state.currencies.currencies && state.categories.categories)
})

const mapDispatchToProps = dispatch => ({
    getAllCategories: () => dispatch(getAllCategories()),
    handleGetAllCurrencies: () => dispatch(getAllCurrencies()),
    restoreCart: () => dispatch(restoreCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)