import React, { Component } from 'react';
import { TAX } from '../../constants/price';
import { checkout } from '../../features/cart/cartSlice';
import { calcAmount, calcTax, calcTotal } from '../../helpers/priceAndCurrencyHelper';
import { connect } from 'react-redux';

class Total extends Component {
    render() {
        const { currencySymbol, taxes, cartItemsAmount, total, handleChekout } =
          this.props;
          
        return (
          <div className="total-container">
            <div className="tax">
              <div className="total-text">Tax {TAX * 100}%:</div>
              <div className="total-amount ">
                {currencySymbol}
                {taxes}
              </div>
            </div>
            <div className="quantity">
              <div className="total-text">Quantity:</div>
              <div className="total-amount">{cartItemsAmount}</div>
            </div>
            <div className="total">
              <div className="total-text result">Total:</div>
              <div className="total-amount">
                {currencySymbol}
                {total}
              </div>
            </div>
            <button onClick={handleChekout} className="order-btn">
              ORDER
            </button>
          </div>
        );
    }
}

const mapStateToProps = state => {
     const total = calcTotal(state.cart.cart, state.currencies.currentCurrency);
     return {
       cartItemsAmount: calcAmount(state.cart.cart),
       total,
       taxes: calcTax(total),
       currencySymbol: state.currencies.currentCurrency.symbol,
     };
}

const mapDispatchToProps = (dispatch) => ({
  handleChekout: () => dispatch(checkout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Total);