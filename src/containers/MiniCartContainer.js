
import { connect } from 'react-redux';
import { TAX } from '../constants/price';
import { checkout, decreaseProductAmount, increaseProductAmount } from '../features/cart/cartSlice';
import MiniCart from './../components/MiniCart/MiniCart';

const calcTotal = (cartItems, currentCurrency) => {
    const totalWithoutTax = cartItems.reduce((acc, nextItem) => {
        const priceInfo = nextItem.prices.find(price => price.currency.label === currentCurrency.label)
        return acc + (priceInfo.amount * nextItem.amount)
    }, 0)

    return (totalWithoutTax + totalWithoutTax * TAX).toFixed(2)
} 

const calcAmount = (cartItems) => cartItems.reduce((acc, nextItem) => acc + nextItem.amount, 0)

const mapStateToProps = state => ({
    cart: state.cart.cart,
    cartItemsAmount: calcAmount(state.cart.cart),
    total: calcTotal(state.cart.cart, state.currencies.currencies[0])
})
const mapDispatchToProps = dispatch => ({
    increaseItemInCartAmount: (cartIndex) => dispatch(increaseProductAmount(cartIndex)),
    decreaseItemInCartAmount: (cartIndex) => dispatch(decreaseProductAmount(cartIndex)),
    handleChekout: () => dispatch(checkout())
})

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart)