import { connect } from 'react-redux'
import { getAllCurrencies } from '../features/currencies/currenciesSlice';

import App from '../App';
import { getAllCategories } from '../features/categories/categoriesSlice';

const mapStateToProps = state => ({
    isContentLoaded: !!(state.currencies && state.categories.categories)
})

const mapDispatchToProps = dispatch => ({
    getAllCategories: () => dispatch(getAllCategories()),
    handleGetAllCurrencies: () => dispatch(getAllCurrencies())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)