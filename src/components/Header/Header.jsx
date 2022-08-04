import { Component } from "react";
import logo from "../../assets/logo.png";
import caret from "../../assets/caret.png";
import cart from "../../assets/cart.png";
import CurrencyDropdownContainer from "../../containers/CurrencyDropdownContainer";

import "./Header.scss";
import { NavLink } from "react-router-dom";
import MiniCartContainer from "../../containers/MiniCartContainer";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCurrencyOpen: false,
      isMiniCartOpen: false,
    };
  }

  handleCurrencyClick = () => {
    this.setState({
      isCurrencyOpen: !this.state.isCurrencyOpen,
    });
  };

  toggleMiniCart = () => {
    if (!this.state.isMiniCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    this.setState({ isMiniCartOpen: !this.state.isMiniCartOpen });
  };

  render() {
    return (
      <>
        <header>
          <nav className="navigation">
            {this.props.categories.categories && (
              <ul className="navigation-list">
                {this.props.categories.categories.categories.map(({ name }) => (
                  <li className="navigation-item" key={name}>
                    <NavLink
                      to={`/${name}`}
                      activeClassName="navigation-item__active"
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
            <div className="cart-btn" onClick={this.toggleMiniCart}>
              <img src={cart} alt="cart" />
              {this.state.isMiniCartOpen && <MiniCartContainer />}
            </div>
          </div>
        </header>
        {this.state.isMiniCartOpen && (
          <div className="minicart-bg" onClick={this.toggleMiniCart}></div>
        )}
      </>
    );
  }
}

export default Header;
