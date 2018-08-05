import React, {Component} from 'react';
import VariantSelector from './VariantSelector';

class Product extends Component {
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event) {
    const target = event.target
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }

  render() {
    const images = this.props.product.images.map((image) => {
      if(this.props.product.images.length > 1) {
        return (
          <img key={image.id} className="product__image" src={image.src} alt={`${this.props.product.title} product shot`} />
        )
      } else {
        return (
          <img key={image.id} className="product__image product__image--single" src={image.src} alt={`${this.props.product.title} product shot`} />
        )
      }
    })
    let variant = this.state.selectedVariant || this.props.product.variants[0]
    let variantQuantity = this.state.selectedVariantQuantity || 1
    let variantSelectors = this.props.product.options.map((option) => {
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
        />
      );
    });
    return (
      <div className="product">
        {images}
        <h5 className="Product__title">
          {this.props.product.title}
          <span className="Product__price">£{variant.price}</span>
        </h5>
        <div className="product__description" dangerouslySetInnerHTML={{ __html: this.props.product.descriptionHtml }}></div>
        {variantSelectors}
        <button className="product__buy button" onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}>Add</button>
      </div>
    );
  }
}

export default Product;
