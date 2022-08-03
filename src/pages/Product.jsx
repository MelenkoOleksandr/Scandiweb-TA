import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import "./Product.scss"

class Product extends Component {
    componentDidMount() {
        this.props.getProductById(this.props.match.params.productId);
    }
    render() {
        if (this.props.isProductLoading || !this.props.product) {
          return <Spinner />;
        }
       
        const {name, gallery, description, attributes, prices, brand} = this.props.product
        return (
          <section className="product">
            <div className="product-images">
              <div className="secondary-images">
                {gallery.map((imageUrl) => (
                  <img
                    className="secondary-image"
                    src={imageUrl}
                    alt="product"
                  />
                ))}
              </div>
              <img className="main-image" src={gallery[0]} alt="" />
            </div>
            <div className="product-description">
              <h3 className="brand">{brand}</h3>
              <h4 className="name">{name}</h4>

              {attributes.map(({ name, items }) => (
                <>
                  <h4 className="attribute-title">{name}:</h4>
                  <ul className="attribute-list">
                    {items.map(({ displayValue }) => (
                      <li className="attribute-list__item">{displayValue}</li>
                    ))}
                  </ul>
                </>
              ))}
              <div className="price">
                <h4 className="price-title">PRICE:</h4>
                <h5 className='price-amount'>{prices[0].amount} {prices[0].currency.symbol}</h5>
              </div>
              <div className="btn-add">
                Add to Cart
              </div>
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: description }}
              ></div>
            </div>
          </section>
        );
    }
}

export default withRouter(Product);