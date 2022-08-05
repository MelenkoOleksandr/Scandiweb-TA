import React, { Component } from 'react';
import cart from "../../../../assets/cart.png";
import { connect } from 'react-redux';
import { calcAmount } from '../../../../helpers/priceAndCurrencyHelper';

class CartBadge extends Component {
    render() {
      const { cartItemsAmount, toggleMiniCart } = this.props;
        return (
          <div onClick={toggleMiniCart} className="cart-btn_icon">
            {cartItemsAmount > 0 && (
              <div className="cart-badge">{cartItemsAmount}</div>
            )}
            <img src={cart} alt="cart" />
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
  cartItemsAmount: calcAmount(state.cart.cart),
});

export default connect(mapStateToProps)(CartBadge);