import { connect } from 'react-redux'
import { getAllProductsInCategory } from '../features/products/productsSlice';
import { calcAmount } from '../helpers/priceAndCurrencyHelper';
import Header from './../components/Header/Header';

const mapStateToProps = state => ({
    categories: state.categories,
    currentCategory: state.categories.currentCategory,
    cartItemsAmount: calcAmount(state.cart.cart),
})

const mapDispatchToProps = dispatch => ({
    handleCategoryChange: (category) => dispatch(getAllProductsInCategory(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)