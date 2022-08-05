import React, { Component } from "react";
import CartItem from "../components/CartItem/CartItem";
import Total from "../components/Total/Total";
import { connect } from "react-redux";

import "./Cart.scss";

class Cart extends Component {
  render() {
    return (
      <section className="cart">
        <h2 className="cart-title">CART</h2>
        <div className="cart-items">
          {this.props.cart.map((item, cartItemIndex) => (
            <CartItem item={item} cartItemIndex={cartItemIndex} />
          ))}
        </div>
        <Total />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(Cart);
