import React, { Component } from "react";
import addItem from "../assets/addItem.png";
import removeItem from "../assets/removeItem.png";

import "./Cart.scss";
class Cart extends Component {
  render() {
    console.log(this.props);
    return (
      <section className="cart">
        <h2 className="cart-title">CART</h2>
        <div className="cart-items">
          {this.props.cart &&
            this.props.cart.map(
              ({ name, gallery, attributes, prices, brand }) => (
                <div className="cart-item">
                  <div className="item-desc">
                    <h4 className="item-brand">{brand}</h4>
                    <h3 className="item-type">{name}</h3>
                    <h5 className="item-price">
                      {prices[0].amount} {prices[0].currency.symbol}
                    </h5>

                    {attributes.map(({ name, items, selected }) => (
                      <div className="item-sizes">
                        <h5 className="sizes-title">{name}:</h5>
                        <ul className="sizes">
                          {items.map((item) =>  (
                              <li
                                className={`size ${
                                  item.displayValue === selected.displayValue
                                    ? "selected"
                                    : ""
                                }`}
                              >
                                {item.displayValue}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    ))}

                    {/* <div className="item-sizes">
                          <h5 className="sizes-title">SIZE:</h5>
                          <ul className="sizes">
                            <li className="size">XS</li>
                            <li className="size selected">S</li>
                            <li className="size">M</li>
                            <li className="size">L</li>
                          </ul>
                        </div>
                        <div className="item-colors">
                          <h5 className="colors-title">COLOR:</h5>
                          <ul className="colors">
                            <li
                              className="color selected"
                              style={{ background: "black" }}
                            ></li>
                            <li
                              className="color"
                              style={{ background: "blue" }}
                            ></li>
                            <li
                              className="color"
                              style={{ background: "orange" }}
                            ></li>
                          </ul>
                        </div> */}
                  </div>
                  <div className="item-actions">
                    <div className="item-amount">
                      <button className="amount-btn">
                        <img src={addItem} alt="add button" />
                      </button>
                      <div className="amount">1</div>
                      <button className="amount-btn">
                        <img src={removeItem} alt="remove button" />
                      </button>
                    </div>
                    <div className="item-image">
                      <img className="image" src={gallery[0]} alt="coat" />
                      <div className="changer">
                        <div className="changer-btn prev-img">{"<"}</div>
                        <div className="changer-btn next-img">{">"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
        <div className="total-container">
          <div className="tax">
            <div className="total-text">Tax 21%:</div>
            <div className="total-amount ">$42.00</div>
          </div>
          <div className="quantity">
            <div className="total-text">Quantity:</div>
            <div className="total-amount">3</div>
          </div>
          <div className="total">
            <div className="total-text result">Total:</div>
            <div className="total-amount">$200.00</div>
          </div>
          <button className="order-btn">ORDER</button>
        </div>
      </section>
    );
  }
}

export default Cart;
