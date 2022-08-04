import { Component } from "react";
import logo from "../../assets/logo.png";
import caret from "../../assets/caret.png";
import cart from "../../assets/cart.png";
import CurrencyDropdownContainer from "../../containers/CurrencyDropdownContainer";

import "./Header.scss";
import { NavLink } from "react-router-dom";
import MiniCartContainer from "../../containers/MiniCartContainer";
import OutsideClickChecker from "../OutsideClickChecker/OutsideClickChecker";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCurrencyOpen: false,
      isMiniCartOpen: false,
    };
  }

  toggleIsCurrencyOpen = () => {
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
                onClick={this.toggleIsCurrencyOpen}
              >
                <img src={caret} alt="caret" />
              </button>
              {this.state.isCurrencyOpen && (
                <OutsideClickChecker close={this.toggleIsCurrencyOpen}>
                  <CurrencyDropdownContainer />
                </OutsideClickChecker>
              )}
            </div>
            <div className="cart-btn" onClick={this.toggleMiniCart}>
              <img src={cart} alt="cart" />
              {this.state.isMiniCartOpen && (
                <OutsideClickChecker close={this.toggleMiniCart}>
                  <MiniCartContainer />
                </OutsideClickChecker>
              )}
            </div>
          </div>
        </header>
        {this.state.isMiniCartOpen && <div className="minicart-bg"></div>}
      </>
    );
  }
}

export default Header;
