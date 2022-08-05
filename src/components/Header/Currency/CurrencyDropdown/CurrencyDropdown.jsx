import React, { Component } from "react";

class CurrencyDropdown extends Component {
  handleCurrencyClick = (currency) => {
    this.props.handleSetCurrency(currency);
    this.props.closeAfterSelect();
  };

  render() {
    if (!this.props.currencies) {
      return null;
    }
    return (
      <ul className="currency-list">
        {this.props.currencies.map((currency) => (
          <li
            key={currency.symbol}
            onClick={() => this.handleCurrencyClick(currency)}
            className={`currency-item ${
              this.props.currentCurrency.label === currency.label
                ? "active"
                : ""
            }`}
          >{`${currency.symbol} ${currency.label}`}</li>
        ))}
      </ul>
    );
  }
}

export default CurrencyDropdown;
