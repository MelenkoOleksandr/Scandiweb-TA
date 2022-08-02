import { connect } from 'react-redux'
import { getAllProductsInCategory } from '../features/products/productsSlice';
import Category from '../pages/Category';

const mapStateToProps = state => ({
    products: state.products.products,
    isProductsLoading: state.products.isLoading,
    currentCategory: state.categories.currentCategory
})

const mapDispatchToProps = dispatch => ({
    getAllProducts: category => dispatch(getAllProductsInCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)