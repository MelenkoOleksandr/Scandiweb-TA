import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';

class Product extends Component {
    componentDidMount() {
        this.props.getProductById(this.props.match.params.productId);
    }
    render() {
        if (this.props.isProductLoading || !this.props.product) {
          return <Spinner />;
        }
        console.log(this.props.product);
       
        const {name, gallery, description, attributes, prices, brand} = this.props.product
        return (
          <section className="product">
            <div className="product-images">
              <div className="secondary-images">
                {/* {gallery.map((imageUrl) => (
                  <img
                    className="secondary-image"
                    src={imageUrl}
                    alt="product"
                  />
                ))} */}
              </div>
              <img className="main-image" src="" alt="" />
            </div>
            <div className="product-description">
              <h3 className="brand">Apollo</h3>
              <h4 className="brand">Running Short</h4>

              {attributes.map(({ name, items }) => (
                <>
                  <h4>{name}</h4>
                  <ul>
                    {items.map(({ displayValue }) => (
                      <li>{displayValue}</li>
                    ))}
                  </ul>
                </>
              ))}
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