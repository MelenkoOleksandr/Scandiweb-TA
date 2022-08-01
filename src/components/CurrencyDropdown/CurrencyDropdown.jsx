import React, { Component } from "react";

class CurrencyDropdown extends Component {

  handleCurrencyClick = (currency) => {
    this.props.handleSetCurrency(currency);
  };

  render() {
    console.log(this.props.currencies);
    return (
      <ul className="currency-list">
        {this.props.currencies &&
          this.props?.currencies.map((currency) => (
            <li
              key={currency.symbol}
              onClick={() => this.handleCurrencyClick(currency)}
              className="currency-item"
            >{`${currency.symbol} ${currency.label}`}</li>
          ))}
      </ul>
    );
  }
}

export default CurrencyDropdown;
