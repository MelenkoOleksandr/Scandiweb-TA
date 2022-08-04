import React, { Component } from 'react';
import cart from "../../assets/cart.png";

class CartBadge extends Component {
    render() {
        return (
          <div className="cart-btn_icon">
            {this.props.cartItemsAmount > 0 && (
              <div className="cart-badge">{this.props.cartItemsAmount}</div>
            )}
            <img src={cart} alt="cart" />
          </div>
        );
    }
}

export default CartBadge;