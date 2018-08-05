import React, {Component} from 'react';
import Image from './../images/chevron.png'

class VariantSelector extends Component {
  render() {
    return (
      <div className="select__wrapper">
        <select
          className="product__option"
          name={this.props.option.name}
          key={this.props.option.name}
          onChange={this.props.handleOptionChange}
        >
          {this.props.option.values.map((value) => {
            return (
              <option value={value} key={`${this.props.option.name}-${value}`}>{`${value}`}</option>
            )
          })}
        </select>
        <img src={Image} alt="" />
      </div>
    );
  }
}

export default VariantSelector;
