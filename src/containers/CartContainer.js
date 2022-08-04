
import { connect } from 'react-redux';
import { decreaseProductAmount, increaseProductAmount } from '../features/cart/cartSlice';
import { calcAmount, calcTax, calcTotal } from '../helpers/priceAndCurrencyHelper';
import Cart from '../pages/Cart';

const mapStateToProps = state => {
    const total = calcTotal(state.cart.cart, state.currencies.currentCurrency)
    return ({
        cart: state.cart.cart,
        cartItemsAmount: calcAmount(state.cart.cart),
        total,
        taxes: calcTax(total),
        currency: state.currencies.currentCurrency
    })
} 
const mapDispatchToProps = dispatch => ({
    increaseItemInCartAmount: (cartIndex) => dispatch(increaseProductAmount(cartIndex)),
    decreaseItemInCartAmount: (cartIndex) => dispatch(decreaseProductAmount(cartIndex))   
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)