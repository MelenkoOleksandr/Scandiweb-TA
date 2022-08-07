import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPriceStrByCurrency } from "./../../helpers/priceAndCurrencyHelper";
import ItemAmountController from './../ItemAmountController/ItemAmountController';
import Attributes from "../Attributes/Attributes";

import "./MiniCart.scss";
class MiniCart extends Component {
  increaseCartAmount = (cartIndex) => {
    this.props.increaseItemInCartAmount(cartIndex);
  };

  decreaseCartAmount = (cartIndex) => {
    this.props.decreaseItemInCartAmount(cartIndex);
  };

  render() {
    return (
      <div className="minicart">
        <h2 className="minicart-title">
          <span className="bold">My Bag</span>, {this.props.cartItemsAmount}{" "}
          items
        </h2>
        <div className="cart-items">
          {this.props.cart &&
            this.props.cart.map((item, cartItemIndex) => {
              const { name, gallery, attributes, prices, brand, amount } = item;
              const price = getPriceStrByCurrency(prices, this.props.currency);
              return (
                <div className="cart-item" key={cartItemIndex}>
                  <div className="item-desc">
                    {brand && <h4 className="item-brand">{brand}</h4>}
                    {name && <h3 className="item-type">{name}</h3>}
                    <h5 className="item-price">{price}</h5>
                    <Attributes attributes={attributes} isEditable={false} />
                  </div>
                  <div className="item-actions">
                    <ItemAmountController
                      cartItemIndex={cartItemIndex}
                      amount={amount}
                    />
                    <div className="item-image">
                      <img className="image" src={gallery[0]} alt="coat" />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="total">
          <div className="total-title">Total</div>
          <div className="total-amount">
            {this.props.currency.symbol}
            {this.props.total}
          </div>
        </div>

        <div className="minicart-btns">
          <Link
            to={"/cart"}
            onClick={this.props.toggleMiniCart}
            className="bag-btn"
          >
            View Bag
          </Link>
          <button onClick={this.props.handleChekout} className="checkout-btn">
            Check out
          </button>
        </div>
      </div>
    );
  }
}

export default MiniCart;
