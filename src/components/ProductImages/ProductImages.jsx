import React, { Component } from "react";

class ProductImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      imagesScrollIndex: 0,
    };
  }

  changeCurrentImage = (imageIndex) => {
    this.setState({ currentImageIndex: (imageIndex + this.state.imagesScrollIndex) % this.props.gallery.length });
  };

  slideImages = () => {
    this.setState({imagesScrollIndex: this.state.imagesScrollIndex + 1})
  }

  render() {
    const gallery = this.props.gallery
    const galleryLength = gallery.length;
    const showNextButton = gallery.length > 3
    const shownImages = showNextButton ? [
      gallery[this.state.imagesScrollIndex % galleryLength],
      gallery[(this.state.imagesScrollIndex + 1) % galleryLength],
      gallery[(this.state.imagesScrollIndex + 2) % galleryLength],
    ] : gallery
    return (
      <div className="product-images">
        <div className="secondary-images__wrapper">
          <div className="secondary-images">
            {shownImages.map((imageUrl, imageIndex) => (
              <img
                className="secondary-image"
                onClick={() => this.changeCurrentImage(imageIndex)}
                src={imageUrl}
                alt="product"
              />
            ))}
          </div>
          {showNextButton && (
            <button onClick={this.slideImages} className="next-image">
              Next
            </button>
          )}
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
