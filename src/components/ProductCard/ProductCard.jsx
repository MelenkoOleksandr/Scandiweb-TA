import React, { Component } from "react";
import { Link } from "react-router-dom";
import cartWhite from "../../assets/cartWhite.png";

class ProductCard extends Component {
  render() {
    // const {id, name, gallery, prices,inStock, brand} = this.props?.product
    // console.log(this.props.currency);
    const price =
      this.props.product &&
      this.props.product.prices.find(
        (price) => price.currency.label === this.props.currency.label
      );

    return (
      <div className="product-card">
        <Link
          to={`/${this.props.product.category}/${this.props.product.id}`}
          className="product-image__container"
        >
          <img
            className="product-image"
            src={this.props?.product.gallery[0]}
            alt="productImage"
          />
          <button className="cart-btn">
            <img src={cartWhite} alt="" />
          </button>
        </Link>

        <div className="product-content">
          <h4 className="product-name">
            {`${this.props.product?.brand} ${this.props.product?.name}`}
          </h4>
          <div className="product-price">
            {price && `${price.currency.symbol}${price.amount.toFixed(2)}`}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
