import React, { Component } from "react";
import { connect } from "react-redux";
import { getPriceStrByCurrency } from "../../helpers/priceAndCurrencyHelper";
import CartProductSlider from "./CartProductSlider/CartProductSlider";
import ItemAmountController from "../ItemAmountController/ItemAmountController";
import Attributes from "../Attributes/Attributes";

class CartItem extends Component {
  increaseCartAmount = (cartIndex) => {
    this.props.increaseItemInCartAmount(cartIndex);
  };

  decreaseCartAmount = (cartIndex) => {
    this.props.decreaseItemInCartAmount(cartIndex);
  };

  render() {
    const { item, currency, cartItemIndex } = this.props;
    const { name, gallery, attributes, prices, brand, amount } = item;
    const price = getPriceStrByCurrency(prices, currency);

    return (
      <div className="cart-item">
        <div className="item-desc">
          <h4 className="item-brand">{brand}</h4>
          <h3 className="item-type">{name}</h3>
          <h5 className="item-price">{price}</h5>
          <Attributes isEditable={false} attributes={attributes}/>
         
        </div>
        <div className="item-actions">
          <ItemAmountController cartItemIndex={cartItemIndex} amount={amount} />
          <CartProductSlider gallery={gallery} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currencies.currentCurrency,
});


export default connect(mapStateToProps)(CartItem);
