import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import "./Product.scss";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attributes: props.product
        ? props.product.attributes.map((attribute) => ({
            ...attribute,
            selectedValue: attribute.items[0],
          }))
        : [],
    };
  }
  componentDidMount() {
    this.props.getProductById(this.props.match.params.productId);
  }
  handleAddClick = () => {
    this.props.addProductToCart(this.props.product);
  };
  changeAttribute = (name, displayValue) => {
    this.setState({
      attributes: this.state.attributes.map((attr) =>
        attr.name === name ? { ...attr, selectedValue: displayValue } : attr
      ),
    });
  };
  render() {
    if (this.props.isProductLoading || !this.props.product) {
      return <Spinner />;
    }

    console.log(this.state.attributes);

    const { name, gallery, description, attributes, prices, brand } =
      this.props.product;

    return (
      <section className="product">
        <div className="product-images">
          <div className="secondary-images">
            {gallery.map((imageUrl) => (
              <img className="secondary-image" src={imageUrl} alt="product" />
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
                {items.map(({ displayValue }) => {
                  const attribute = this.state.attributes.find(
                    (attribute) => attribute.name === name
                  );

                  console.log(attribute);

                  const selectedClass =
                    attribute &&
                    attribute.selectedValue.displayValue === displayValue
                      ? "selected"
                      : "";

                  return (
                    <li
                      onClick={() => this.changeAttribute(name, displayValue)}
                      className={`attribute-list__item ${selectedClass}`}
                    >
                      {displayValue}
                    </li>
                  );
                })}
              </ul>
            </>
          ))}
          <div className="price">
            <h4 className="price-title">PRICE:</h4>
            <h5 className="price-amount">
              {prices[0].amount} {prices[0].currency.symbol}
            </h5>
          </div>
          <button onClick={this.handleAddClick} className="btn-add">
            Add to Cart
          </button>
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
