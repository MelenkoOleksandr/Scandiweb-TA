import React, { Component } from 'react';
import OutsideClickChecker from '../../OutsideClickChecker/OutsideClickChecker';
import CurrencyDropdownContainer from "../../../containers/CurrencyDropdownContainer";
import caret from "../../../assets/caret.png";
import { connect } from 'react-redux';

import "./Currency.scss";

class Currency extends Component {
    render() {
        const { isCurrencyOpen, toggleIsCurrencyOpen, currencySymbol } =
          this.props;
        return (
          <div onClick={toggleIsCurrencyOpen} className="currency">
            <div className="currency-sign">{currencySymbol}</div>
            <div className="currency-caret">
              <img src={caret} alt="caret" />
            </div>
            {isCurrencyOpen && (
              <OutsideClickChecker close={toggleIsCurrencyOpen}>
                <CurrencyDropdownContainer
                  closeAfterSelect={toggleIsCurrencyOpen}
                />
              </OutsideClickChecker>
            )}
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
  currencySymbol: state.currencies.currentCurrency.symbol,
});

export default connect(mapStateToProps, null)(Currency);