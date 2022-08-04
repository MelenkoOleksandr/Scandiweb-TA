import React, { Component } from "react";
import { Link } from "react-router-dom";
import cartWhite from "../../assets/cartWhite.png";
import { getPriceStrByCurrency } from "../../helpers/priceAndCurrencyHelper";

class ProductCard extends Component {
  render() {
    if (!this.props.product) {
      return null
    }
    const {id, name, gallery, prices,inStock, brand} = this.props.product

    const price = getPriceStrByCurrency(prices, this.props.currency)

    return (
      <Link to={`/${this.props.product.category}/${this.props.product.id}`}  className={`product-card ${!inStock ? 'not-available' : ''}`}>
        <div
          
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
        </div>

        <div className="product-content">
          <h4 className="product-name">
            {`${this.props.product?.brand} ${this.props.product?.name}`}
          </h4>
          <div className="product-price">
           {price}
          </div>
        </div>
      </Link>
    );
  }
}

export default ProductCard;
