import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Attribute from "../components/Attribute/Attribute";
import Spinner from "../components/Spinner/Spinner";
import "./Product.scss";

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {selectedAttributes: []}
  }

  componentDidMount() {
    this.props.getProductById(this.props.match.params.productId);
  }

  addToSelectedAttributes = (attr, value) => {
    this.setState({selectedAttributes: [...this.state.selectedAttributes.filter(attribute => attribute.name !== attr.name), {...attr, selected: value}]})
  }

  handleAddClick = () => {
    this.props.addProductToCart({...this.props.product, attributes: this.state.selectedAttributes});
  };


  render() {
    if (this.props.isProductLoading || !this.props.product) {
      return <Spinner />;
    }
    console.log(this.state.selectedAttributes);

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

          {attributes.map((attribute) => (
            <Attribute addToSelectedAttributes={this.addToSelectedAttributes} attribute={attribute} />
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
