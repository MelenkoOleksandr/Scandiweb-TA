import React, { Component } from 'react';
import addItem from "../../assets/addItem.png";
import removeItem from "../../assets/removeItem.png";
import { decreaseProductAmount, increaseProductAmount } from '../../features/cart/cartSlice';
import { connect } from 'react-redux';



class ItemAmountController extends Component {
  increaseCartAmount = (cartIndex) => {
    this.props.increaseItemInCartAmount(cartIndex);
  };

  decreaseCartAmount = (cartIndex) => {
    this.props.decreaseItemInCartAmount(cartIndex);
  };

  render() {
    const { cartItemIndex, amount } = this.props;
    return (
      <div className="item-amount">
        <button
          onClick={() => this.increaseCartAmount(cartItemIndex)}
          className="amount-btn"
        >
          <img src={addItem} alt="add button" />
        </button>
        <div className="amount">{amount}</div>
        <button
          onClick={() => this.decreaseCartAmount(cartItemIndex)}
          className="amount-btn"
        >
          <img src={removeItem} alt="remove button" />
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  increaseItemInCartAmount: (cartIndex) =>
    dispatch(increaseProductAmount(cartIndex)),
  decreaseItemInCartAmount: (cartIndex) =>
    dispatch(decreaseProductAmount(cartIndex)),
});


export default connect(null, mapDispatchToProps)(ItemAmountController);