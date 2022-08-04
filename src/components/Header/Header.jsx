import { Component } from "react";
import logo from "../../assets/logo.png";
import caret from "../../assets/caret.png";
import cart from "../../assets/cart.png";
import CurrencyDropdownContainer from "../../containers/CurrencyDropdownContainer";

import "./Header.scss";
import { NavLink } from "react-router-dom";
import MiniCartContainer from "../../containers/MiniCartContainer";
import OutsideClickChecker from "../OutsideClickChecker/OutsideClickChecker";
import CartBadge from "../CartBadge/CartBadge";

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

  closeMiniCart = () => {
    document.body.style.overflow = "visible";
    this.setState({ isMiniCartOpen: false });
  }
  
  showMiniCart = () => {
    document.body.style.overflow = "hidden";
    this.setState({ isMiniCartOpen: true });
  }

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
            <div onClick={this.toggleIsCurrencyOpen} className="currency">
              $
              <div className="currency-caret">
                <img src={caret} alt="caret" />
              </div>
              {this.state.isCurrencyOpen && (
                <OutsideClickChecker close={this.toggleIsCurrencyOpen}>
                  <CurrencyDropdownContainer
                    closeAfterSelect={this.toggleIsCurrencyOpen}
                  />
                </OutsideClickChecker>
              )}
            </div>
            <div onClick={this.toggleMiniCart} className="cart-btn">
              <CartBadge cartItemsAmount={this.props.cartItemsAmount} />

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
