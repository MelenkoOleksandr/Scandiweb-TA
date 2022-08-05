import React, { Component } from "react";
import { Link } from "react-router-dom";
import cartWhite from "../../assets/cartWhite.png";
import { getPriceStrByCurrency } from "../../helpers/priceAndCurrencyHelper";
import AttributeSelector from "./AttributeSelector/AttributeSelector";

import "./ProductCard.scss";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectingMode: false,
      selectedAttributes: [],
    };
  }

  toggleSelectingMode = () => {
      if (!this.state.selectingMode) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    this.setState({ selectingMode: !this.state.selectingMode });
  };

  fillSelectedAttributes = attributes => {
    const attributesWithBaseParams = attributes.map(attribute => ({...attribute, selected: attribute.items[0]}))
    console.log(attributesWithBaseParams);
    this.setState({ selectedAttributes: attributesWithBaseParams }, () => console.log(this.state));
  }

  addToSelectedAttributes = (attr, value) => {
    const resultOfAdding = [
      ...this.state.selectedAttributes.filter(
        (attribute) => attribute.name !== attr.name
      ),
      { ...attr, selected: value },
    ];
    this.setState(
      {
        selectedAttributes: resultOfAdding,
      },
      () => console.log("Attributes", this.state.selectedAttributes)
    );
  };

  handleAddClick = () => {
    this.props.addProductToCart({
      ...this.props.product,
      attributes: this.state.selectedAttributes,
    });
    this.toggleSelectingMode();
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
                e.preventDefault();
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
          <AttributeSelector
            attributes={attributes}
            toggleSelectingMode={this.toggleSelectingMode}
            addToSelectedAttributes={this.addToSelectedAttributes}
            handleAddClick={this.handleAddClick}
            fillSelectedAttributes={this.fillSelectedAttributes}
          />
        )}
      </>
    );
  }
}

export default ProductCard;
