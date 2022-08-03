import { connect } from 'react-redux'
import { addProduct } from '../features/cart/cartSlice';
import { getProduct } from '../features/product/product';

import Product from '../pages/Product';

const mapStateToProps = state => ({
    isProductLoading: state.product.isLoading,
    product: state.product.product,
})

const mapDispatchToProps = dispatch => ({
    getProductById: productId => dispatch(getProduct(productId)),
    addProductToCart: product => dispatch(addProduct(product)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)