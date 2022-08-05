import React, { Component } from 'react';
import Attributes from '../../Attributes/Attributes';
import OutsideClickChecker from '../../OutsideClickChecker/OutsideClickChecker';

class AttributeSelector extends Component {
    render() {
        const {
          attributes,
          toggleSelectingMode,
          addToSelectedAttributes,
          handleAddClick,
          fillSelectedAttributes,
        } = this.props;
        
        return (
          <div className="attributes-selector__wrapper">
            <OutsideClickChecker close={toggleSelectingMode}>
              <div className="attributes-content">
                <div className="title">Please Submit Item</div>
                <Attributes
                  fillSelectedAttributes={fillSelectedAttributes}
                  attributes={attributes}
                  addToSelectedAttributes={addToSelectedAttributes}
                  isEditable={true}
                />
                <button onClick={handleAddClick} className="confirm-btn">
                  Confirm
                </button>
              </div>
            </OutsideClickChecker>
          </div>
        );
    }
}

export default AttributeSelector;