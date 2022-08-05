import React, { Component } from "react";

class ProductImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
    };
  }

  changeCurrentImage = (imageIndex) => {
    this.setState({ currentImageIndex: imageIndex });
  };
  
  render() {
    return (
      <div className="product-images">
        <div className="secondary-images">
          {this.props.gallery.map((imageUrl, imageIndex) => (
            <img
              className="secondary-image"
              onClick={() => this.changeCurrentImage(imageIndex)}
              src={imageUrl}
              alt="product"
            />
          ))}
        </div>
        <img
          className="main-image"
          src={this.props.gallery[this.state.currentImageIndex]}
          alt=""
        />
      </div>
    );
  }
}

export default ProductImages;
