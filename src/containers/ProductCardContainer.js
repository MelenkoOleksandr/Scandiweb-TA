import { connect } from 'react-redux'
import { addProduct } from '../features/cart/cartSlice';
import ProductCard from './../components/ProductCard/ProductCard';

const mapStateToProps = state => ({
    currency: state.currencies.currentCurrency
})       
const mapDispatchToProps = dispatch => ({
    addProductToCart: product => dispatch(addProduct(product))
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)