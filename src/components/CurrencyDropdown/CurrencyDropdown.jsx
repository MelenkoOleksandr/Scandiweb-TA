import React, { Component } from 'react';

class CurrencyDropdown extends Component {
    render() {
        return (
          <ul className="currency-list">
            <li className="currency-item">$ USD</li>
            <li className="currency-item active">€ EUR</li>
            <li className="currency-item">¥ JPY</li>
          </ul>
        );
    }
}

export default CurrencyDropdown;