import React, { Component } from 'react';

class Product extends Component {
    render() {
        return ( 
            <section className='product'>
                <div className="product-images">
                    <div className="secondary-images">
                        <img className='secondary-image' src="" alt="" />
                        <img className='secondary-image' src="" alt="" />
                        <img className='secondary-image' src="" alt="" />
                    </div>
                    <img className='main-image' src="" alt="" />
                </div>
                <div className="product-description">
                    <h3 className="brand">Apollo</h3>
                    <h4 className="brand">Running Short</h4>
                </div>
            </section>
        );
    }
}

export default Product;