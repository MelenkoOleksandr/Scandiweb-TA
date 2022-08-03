
import { connect } from 'react-redux';
import Cart from '../pages/Cart';

const mapStateToProps = state => ({
    cart: state.cart.cart
})
const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)