
import { connect } from 'react-redux';
import { decreaseProductAmount, increaseProductAmount } from '../features/cart/cartSlice';
import Cart from '../pages/Cart';

const mapStateToProps = state => ({
    cart: state.cart.cart
})
const mapDispatchToProps = dispatch => ({
    increaseItemInCartAmount: (cartIndex) => dispatch(increaseProductAmount(cartIndex)),
    decreaseItemInCartAmount: (cartIndex) => dispatch(decreaseProductAmount(cartIndex))   
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)