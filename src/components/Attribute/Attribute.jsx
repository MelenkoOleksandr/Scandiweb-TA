import React, { Component } from "react";

class Attribute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.attribute.items[0],
    };
  }

  componentDidMount() {
    this.props.addToSelectedAttributes(this.props.attribute, this.props.attribute.items[0])
  }

  changeSelected = (attr, item) => {
    this.setState({ selected: item });
    this.props.addToSelectedAttributes(attr, item);
  };

  render() {
    const { name, items } = this.props.attribute;

    return (
      <div className="attribute">
        <h4 className="attribute-title">{name}:</h4>
        <ul className="attribute-list">
          {items.map((item) => {
            const selectedClass =
              item.displayValue === this.state.selected.displayValue
                ? "selected"
                : "";

            return (
              <li
                onClick={() => this.changeSelected(this.props.attribute, item)}
                className={`attribute-list__item ${selectedClass}`}
              >
                {item.displayValue}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Attribute;
