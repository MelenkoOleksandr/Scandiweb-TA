import React, { Component } from "react";
import { Query } from '@apollo/client/react/components';
import { gql } from '@apollo/client';


const GET_ALL_CURRENCIES = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;

class CurrencyDropdown extends Component {
  handleCurrencyClick = (currency) => {
    this.props.handleSetCurrency(currency)
  };

  render() {
    return (
      <Query query={GET_ALL_CURRENCIES}>
        {({ loading, error, data }) => {
          console.log(data);
          return (
            <ul className="currency-list">
              {data &&
                data.currencies.map((currency) => (
                  <li
                    key={currency.symbol}
                    onClick={() => this.handleCurrencyClick(currency)}
                    className="currency-item"
                  >{`${currency.symbol} ${currency.label}`}</li>
                ))}
            </ul>
          );
        }}
      </Query>
    );
  }
}

export default CurrencyDropdown;
