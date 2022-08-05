import { Component } from "react";
import logo from "../../assets/logo.png";
import Currency from "./Currency/Currency";
import Cart from "./Cart/Cart";
import Navigation from "./Navigation/Navigation";

import "./Header.scss";

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
          <Navigation />
          <img className="logo" src={logo} alt="logo" />
          <div className="actions">
            <Currency
              toggleIsCurrencyOpen={this.toggleIsCurrencyOpen}
              isCurrencyOpen={this.state.isCurrencyOpen}
            />
            <Cart
              toggleMiniCart={this.toggleMiniCart}
              isMiniCartOpen={this.state.isMiniCartOpen}
            />
          </div>
        </header>
        {this.state.isMiniCartOpen && <div className="minicart-bg"></div>}
      </>
    );
  }
}

export default Header;
