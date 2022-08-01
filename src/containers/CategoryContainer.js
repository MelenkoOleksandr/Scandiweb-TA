import { connect } from 'react-redux'
import { getAllProductsInCategory } from '../features/products/productsSlice';
import Category from '../pages/Category';

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = dispatch => ({
    getAllProducts: category => dispatch(getAllProductsInCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)