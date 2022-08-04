
import { connect } from 'react-redux';

import { checkout, decreaseProductAmount, increaseProductAmount } from '../features/cart/cartSlice';
import { calcAmount, calcTotal } from '../helpers/priceAndCurrencyHelper';
import MiniCart from './../components/MiniCart/MiniCart';

const mapStateToProps = state => ({
    cart: state.cart.cart,
    cartItemsAmount: calcAmount(state.cart.cart),
    total: calcTotal(state.cart.cart, state.currencies.currentCurrency),
    currency: state.currencies.currentCurrency
})
const mapDispatchToProps = dispatch => ({
    increaseItemInCartAmount: (cartIndex) => dispatch(increaseProductAmount(cartIndex)),
    decreaseItemInCartAmount: (cartIndex) => dispatch(decreaseProductAmount(cartIndex)),
    handleChekout: () => dispatch(checkout())
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart)