import React, { Component } from "react";

export default class OutsideClickChecker extends Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (
      this.wrapperRef &&
      !this.wrapperRef.current.contains(event.target) &&
      !event.target.parentElement.classList.contains(this.props.itemToAvoid)
    ) {
      this.props.close();
    }
  }

  render() {
    return <div ref={this.wrapperRef}>{this.props.children}</div>;
  }
}
