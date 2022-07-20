import React, { Component } from 'react';
import cartWhite from "../../assets/cartWhite.png";

class ProductCard extends Component {
    render() {
        return (
          <div className="product-card">
            <div className="product-image__container">
              <img
                className="product-image"
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg"
                alt="productImage"
              />
              <button className="cart-btn">
                <img src={cartWhite} alt="" />
              </button>
            </div>

            <div className="product-content">
              <h4 className="product-name">Apollo Running Short</h4>
              <div className="product-price">$50.00</div>
            </div>
          </div>
        );
    }
}

export default ProductCard;