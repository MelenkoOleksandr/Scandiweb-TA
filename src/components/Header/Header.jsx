import { Component } from "react";
import { gql } from "@apollo/client";
import { Query } from "@apollo/client/react/components";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";
import caret from "../../assets/caret.png";
import cart from "../../assets/cart.png";
import CurrencyDropdown from "../CurrencyDropdown/CurrencyDropdown";

const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    categories {
      name
    }
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCurrencyOpen: false,
      isCartOpen: false,
    };
    this.handleCurrencyClick = this.handleCurrencyClick.bind(this);
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
          <ul className="navigation-list">
            <Query query={GET_ALL_CATEGORIES}>
              {({ loading, error, data }) => {
                if (error) {
                  console.log(error);
                  return null;
                }

                return data?.categories.map(({ name }) => (
                  <li className="navigation-item" key={name}>
                    <NavLink
                      activeClassName="navigation-item__active"
                      to={`/${name}`}
                    >
                      {name}
                    </NavLink>
                  </li>
                ));
              }}
            </Query>
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
          <div className="cart-btn">
            <img src={cart} alt="cart" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
