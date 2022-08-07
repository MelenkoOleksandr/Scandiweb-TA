import React, { Component } from 'react';
import MiniCartContainer from '../../../containers/MiniCartContainer';
import CartBadge from "./CartBadge/CartBadge";
import OutsideClickChecker from '../../OutsideClickChecker/OutsideClickChecker';

import "./Cart.scss";


class Cart extends Component {
    render() {
        const { toggleMiniCart, cartItemsAmount, isMiniCartOpen } = this.props;
        return (
          <div className="cart-btn">
            <CartBadge
              toggleMiniCart={toggleMiniCart}
              cartItemsAmount={cartItemsAmount}
            />

            {isMiniCartOpen && (
              <OutsideClickChecker
                itemToAvoid={"cart-btn_icon"}
                close={toggleMiniCart}
              >
                <MiniCartContainer toggleMiniCart={this.props.toggleMiniCart} />
              </OutsideClickChecker>
            )}
          </div>
        );
    }
}

export default Cart;