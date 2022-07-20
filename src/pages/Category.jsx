import React, { Component } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';
import './Category.scss'
class Category extends Component {
    render() {
        return (
          <section className="category-container">
            <h2 className="category-title">Category Name</h2>
            <div className="products">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
          </section>
        );
    }
}

export default Category;