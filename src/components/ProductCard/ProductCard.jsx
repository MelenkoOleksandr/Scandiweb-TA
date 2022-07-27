import React, { Component } from 'react';
import cartWhite from "../../assets/cartWhite.png";

class ProductCard extends Component {
    render() {
      // const {id, name, gallery, prices,inStock, brand} = this.props?.product
      console.log(this.props.product);
      
      return (
        <div className="product-card">
          <div className="product-image__container">
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
            <div className="product-price">{`${
              this.props.product?.prices[0].currency.symbol
            }${this.props.product?.prices[0].amount.toFixed(2)}`}</div>
          </div>
        </div>
      );
    }
}

export default ProductCard;