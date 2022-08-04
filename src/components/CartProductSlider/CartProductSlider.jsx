import React, { Component } from 'react';

class CartProductSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {currentImageIndex: 0}
    }
    handleNextImage = () => {
        if (this.props.gallery.length - 1 === this.state.currentImageIndex) {
            this.setState({currentImageIndex: 0})
        } else {
            this.setState({currentImageIndex: this.state.currentImageIndex + 1})
        }
    }
    handlePrevImage = () => {
         if (this.state.currentImageIndex === 0) {
           this.setState({ currentImageIndex: this.props.gallery.length - 1 });
         } else {
           this.setState({
             currentImageIndex: this.state.currentImageIndex - 1,
           });
         }
    }
    render() {
        return (
          <div className="item-image">
            <img
              className="image"
              src={this.props.gallery[this.state.currentImageIndex]}
              alt="coat"
            />
            <div className="changer">
              <button onClick={this.handlePrevImage} className="changer-btn prev-img">{"<"}</button>
              <button onClick={this.handleNextImage} className="changer-btn next-img">{">"}</button>
            </div>
          </div>
        );
    }
}

export default CartProductSlider;