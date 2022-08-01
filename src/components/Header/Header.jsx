import { Component } from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";
import caret from "../../assets/caret.png";
import cart from "../../assets/cart.png";
import CurrencyDropdownContainer from "../../containers/CurrencyDropdownContainer";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCurrencyOpen: false,
      isCartOpen: false,
    };
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
  }

  componentWillMount() {
    this.props.getAllCategories();
  }

  handleCurrencyClick() {
    this.setState({
      isCurrencyOpen: !this.state.isCurrencyOpen,
    });
  }

  render() {
    return (
      <header>
        <nav className="navigation">
          {this.props.categories.categories && (
            <ul className="navigation-list">
              {this.props.categories.categories.categories.map(({ name }) => (
                <li className="navigation-item" key={name}>
                  <NavLink
                    activeClassName="navigation-item__active"
                    to={`/${name}`}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
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
            {this.state.isCurrencyOpen && <CurrencyDropdownContainer />}
          </div>
          <div className="cart-btn">
            <img src={cart} alt="cart" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
