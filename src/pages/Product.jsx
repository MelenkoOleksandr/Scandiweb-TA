import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Attributes from "../components/Attributes/Attributes";
import ProductImages from "../components/ProductImages/ProductImages";
import Spinner from "../components/Spinner/Spinner";
import { getPriceStrByCurrency } from "../helpers/priceAndCurrencyHelper";
import "./Product.scss";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedAttributes: [] };
  }

  componentDidMount() {
    this.props.getProductById(this.props.match.params.productId);
  }

  fillSelectedAttributes = (attributes) => {
    this.setState({
      selectedAttributes: attributes.map((attribute) => ({
        ...attribute,
        selected: attribute.items[0],
      })),
    });
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
    this.props.addProductToCart({
      ...this.props.product,
      attributes: this.state.selectedAttributes,
    });
  };

  render() {
    if (this.props.isProductLoading || !this.props.product) {
      return <Spinner />;
    }

    const { name, gallery, inStock, description, attributes, prices, brand } =
      this.props.product;

    const price = getPriceStrByCurrency(prices, this.props.currency);
    return (
      <section className="product">
        <ProductImages gallery={gallery} />
        <div className="product-description">
          <h3 className="brand">{brand}</h3>
          <h4 className="name">{name}</h4>
          <Attributes
            fillSelectedAttributes={this.fillSelectedAttributes}
            addToSelectedAttributes={this.addToSelectedAttributes}
            attributes={attributes}
            isEditable={true}
          />

          <div className="price">
            <h4 className="price-title">PRICE:</h4>
            <h5 className="price-amount">{price}</h5>
          </div>
          <button
            disabled={!inStock}
            onClick={this.handleAddClick}
            className="btn-add"
          >
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
