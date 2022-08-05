import React, { Component } from "react";
import "./Attribute.scss";

class Attribute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.isEditable
        ? props.attribute.items[0]
        : props.attribute.selected,
    };
  }

  changeSelected = (attr, item) => {
    this.setState({ selected: item });
    if (this.props.isEditable) {
      this.props.addToSelectedAttributes(attr, item);
    } 
  };

  render() {
    const { name, items, type } = this.props.attribute;


    return (
      <div className="attribute">
        <h4 className="attribute-title">{name}:</h4>
        <ul className={`attribute-list ${type === 'swatch' ? 'colors' : ''}`}>
          {items.map((item) => {
            const selectedClass =
              item.displayValue === this.state.selected.displayValue
                ? "selected"
                : "";

            return (
              <li
                key={item.displayValue}
                onClick={this.props.isEditable ? () => this.changeSelected(this.props.attribute, item) : () => {}}
                className={`attribute-list__item ${selectedClass}`}
                style={{backgroundColor: item.value}}
              >
                {type !== 'swatch' ? item.displayValue : ''}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Attribute;
