import { Query } from "@apollo/client/react/components";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import "./Category.scss";
import { gql } from "@apollo/client";
import ProductCardContainer from "../containers/ProductCardContainer";

const GetAllProductInCategory = gql`
  query getCategories($category: CategoryInput) {
    category(input: $category) {
      name
      products {
        id
        name
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
        inStock
      }
    }
  }
`;
class Category extends Component {
  

  render() {
    const { categoryName } = this.props.match.params;
    const category = {
      category: {
        title: categoryName,
      },
    };

    return (
      <section className="category-container">
        <h2 className="category-title">Category Name</h2>

        <div className="products">
          <Query query={GetAllProductInCategory} variables={category}>
            {({ loading, error, data }) => {
              console.log(data);
              return data?.category.products.map((product) => (
                <ProductCardContainer product={product} key={product.id} />
              ));
            }}
          </Query>
        </div>
      </section>
    );
  }
}

export default withRouter(Category);
