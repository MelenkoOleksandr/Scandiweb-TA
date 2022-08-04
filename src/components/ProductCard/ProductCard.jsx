import React, { Component } from "react";
import { Link } from "react-router-dom";
import cartWhite from "../../assets/cartWhite.png";
import { getPriceStrByCurrency } from "../../helpers/priceAndCurrencyHelper";
import Attribute from "../Attribute/Attribute";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectingMode: false,
      selectedAttributes: [],
    };
  }

  toggleSelectingMode = () => {
    this.setState({ selectingMode: !this.state.selectingMode });
  };

  addToSelectedAttributes = (attr, value) => {
    this.setState({
      selectedAttributes: [
        ...this.state.selectedAttributes.filter(
          (attribute) => attribute.name !== attr.name
        ),
        { ...attr, selected: value },
      ],
    });
  };

  handleAddClick = () => {
    console.log("clicked");
    this.props.addProductToCart({
      ...this.props.product,
      attributes: this.state.selectedAttributes,
      amount: 1,
    });
  };

  render() {
    if (!this.props.product) {
      return null;
    }
    const { id, name, gallery, prices, attributes, inStock, category, brand } =
      this.props.product;

    const price = getPriceStrByCurrency(prices, this.props.currency);

    return (
      <>
        <Link
          to={`/${category}/${id}`}
          className={`product-card ${!inStock ? "not-available" : ""}`}
        >
          <div className="product-image__container">
            <img
              className="product-image"
              src={gallery[0]}
              alt="productImage"
            />
            <button
              className="cart-btn"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation();
                this.toggleSelectingMode();
              }}
            >
              <img src={cartWhite} alt="" />
            </button>
          </div>

          <div className="product-content">
            <h4 className="product-name">{`${brand} ${name}`}</h4>
            <div className="product-price">{price}</div>
          </div>
        </Link>
        {this.state.selectingMode && (
          <div className="attributes-selector">
            {attributes.map((attr) => (
              <Attribute
                addToSelectedAttributes={this.addToSelectedAttributes}
                attribute={attr}
              />
            ))}
            <button onClick={this.handleAddClick} className="confirm-btn">
              Confirm
            </button>
          </div>
        )}
      </>
    );
  }
}

export default ProductCard;
