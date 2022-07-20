import { Component } from 'react';

import "./Header.scss";
import logo from '../../assets/logo.png';
import caret from "../../assets/caret.png";
import cart from "../../assets/cart.png";
import CurrencyDropdown from '../CurrencyDropdown/CurrencyDropdown';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCurrencyOpen: false,
      isCartOpen: false
    }
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this)
  }

  handleCurrencyClick() {
    this.setState({
      isCurrencyOpen: !this.state.isCurrencyOpen,
    });
  }

  render() {
    console.log(this.state);
    return (
      <header>
        <nav className="navigation">
          <ul className="navigation-list">
            <li className="navigation-item active">Women</li>
            <li className="navigation-item">Men</li>
            <li className="navigation-item">Kids</li>
          </ul>
        </nav>

        <img className="logo" src={logo} alt="logo" />

        <div className="actions">
          <div className="currency">
            $
            <button
              className="currency-caret"
              onClick={this.handleCurrencyClick}
            >
              <img src={caret} alt="caret" />
            </button>
            {this.state.isCurrencyOpen && <CurrencyDropdown />}
          </div>
          <div className="cart">
            <img src={cart} alt="cart" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;