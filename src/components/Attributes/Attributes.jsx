import React, { Component } from "react";
import Attribute from "./Attribute/Attribute";

class Attributes extends Component {
  componentDidMount() {
    if (this.props.isEditable) {
      console.log("Filling");
      this.props.fillSelectedAttributes(this.props.attributes)
    }
  }

  render() {
    const { attributes, addToSelectedAttributes, isEditable } = this.props;
    return (
      <>
        {attributes.map((attr) => (
          <Attribute
            key={attr.name}
            addToSelectedAttributes={addToSelectedAttributes}
            attribute={attr}
            isEditable={isEditable}
          />
        ))}
      </>
    );
  }
}

export default Attributes;
