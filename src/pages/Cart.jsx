import React, { Component } from "react";
import addItem from "../assets/addItem.png";
import removeItem from "../assets/removeItem.png";
import Attribute from "../components/Attribute/Attribute";
import CartProductSlider from "../components/CartProductSlider/CartProductSlider";
import { TAX } from "../constants/price";
import { getPriceStrByCurrency } from "../helpers/priceAndCurrencyHelper";

import "./Cart.scss";
class Cart extends Component {
  increaseCartAmount = (cartIndex) => {
    this.props.increaseItemInCartAmount(cartIndex);
  };

  decreaseCartAmount = (cartIndex) => {
    this.props.decreaseItemInCartAmount(cartIndex);
  };

  render() {
    return (
      <section className="cart">
        <h2 className="cart-title">CART</h2>
        <div className="cart-items">
          {this.props.cart &&
            this.props.cart.map((item, cartIndex) => {
              const { name, gallery, attributes, prices, brand, amount } = item;
              const price = getPriceStrByCurrency(prices, this.props.currency);
              return (
                <div className="cart-item">
                  <div className="item-desc">
                    <h4 className="item-brand">{brand}</h4>
                    <h3 className="item-type">{name}</h3>
                    <h5 className="item-price">{price}</h5>

                    {attributes.map((attribute) => (
                      <Attribute editable={false} attribute={attribute} />
                    ))}
                  </div>
                  <div className="item-actions">
                    <div className="item-amount">
                      <button
                        onClick={() => this.increaseCartAmount(cartIndex)}
                        className="amount-btn"
                      >
                        <img src={addItem} alt="add button" />
                      </button>
                      <div className="amount">{amount}</div>
                      <button
                        onClick={() => this.decreaseCartAmount(cartIndex)}
                        className="amount-btn"
                      >
                        <img src={removeItem} alt="remove button" />
                      </button>
                    </div>
                    <CartProductSlider gallery={gallery} />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="total-container">
          <div className="tax">
            <div className="total-text">Tax {TAX * 100}%:</div>
            <div className="total-amount ">
              {this.props.currency.symbol}
              {this.props.taxes}
            </div>
          </div>
          <div className="quantity">
            <div className="total-text">Quantity:</div>
            <div className="total-amount">{this.props.cartItemsAmount}</div>
          </div>
          <div className="total">
            <div className="total-text result">Total:</div>
            <div className="total-amount">
              {this.props.currency.symbol}
              {this.props.total}
            </div>
          </div>
          <button onClick={this.props.handleChekout} className="order-btn">
            ORDER
          </button>
        </div>
      </section>
    );
  }
}

export default Cart;
