import { Component } from "react";
import { withRouter } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import ProductCardContainer from "../containers/ProductCardContainer";
import { capitalize } from "../helpers/nameHelper";

import "./Category.scss";

class Category extends Component {
  componentDidMount() {
    console.log("mount");
    const currentCategory = this.props.match.params.category;
    this.props.getAllProducts(currentCategory);
  }

  componentDidUpdate() {
    if (!this.props.isProductsLoading) {
      const currentCategory = this.props.match.params.category || "all";
      this.props.getAllProducts(currentCategory);
    }
  }

  shouldComponentUpdate(nextProps) {
    if (!this.props.products) return true;

    return (
      this.props.match.params.category !== nextProps.match.params.category ||
      this.props.products.length !== nextProps.products.length
    );
  }

  render() {
    if (this.props.isProductsLoading) {
      return <Spinner />;
    }
    const currentCategory = this.props.match.params.category || "all";
    return (
      <section className="category-container">
        <h2 className="category-title">{capitalize(currentCategory)}</h2>
        <div className="products">
          {this.props.products?.map((product) => (
            <ProductCardContainer product={product} key={product.id} />
          ))}
        </div>
      </section>
    );
  }
}

export default withRouter(Category);
