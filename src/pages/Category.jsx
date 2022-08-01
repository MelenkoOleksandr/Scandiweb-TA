import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Category.scss";
import ProductCardContainer from "../containers/ProductCardContainer";

class Category extends Component {
  componentWillMount() {
    this.props.getAllProducts({
      category: {
        title: this.props.match.params.categoryName,
      },
    });
  }

  componentDidUpdate() {
    this.props.getAllProducts({
      category: {
        title: this.props.match.params.categoryName,
      },
    });
  }

  render() {
    return (
      this.props.products.products && (
        <section className="category-container">
          <h2 className="category-title">Category Name</h2>
          <div className="products">
            {this.props.products.products.map((product) => (
              <ProductCardContainer product={product} key={product.id} />
            ))}
          </div>
        </section>
      )
    );
  }
}

export default withRouter(Category);
