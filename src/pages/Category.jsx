import { Component } from "react";
import { withRouter } from "react-router-dom";
import SkeletonLoader from "../components/Skeleton/Skeleton";
import ProductCardContainer from "../containers/ProductCardContainer";

import "./Category.scss";

class Category extends Component {
  componentDidMount() {
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
    if (!this.props.products) return true
    
    return (
      this.props.match.params.category !== nextProps.match.params.category ||
      this.props.products.length !== nextProps.products.length
    );
  }

  render() {
    const currentCategory = this.props.match.params.category || "all";
    const skeletonArray = new Array(6).fill(0);
    console.log(this.props.products);
    return (
      <section className="category-container">
        <h2 className="category-title">{currentCategory}</h2>
        <div className="products">
          {this.props.isProductsLoading
            ? skeletonArray.map((el, index) => <SkeletonLoader key={index} />)
            : this.props.products.map((product) => (
                <ProductCardContainer product={product} key={product.id} />
              ))}
        </div>
      </section>
    );
  }
}

export default withRouter(Category);
