import React, { Component } from 'react';
import Products from './Products';
import Cart from './Cart';
import BasketImage from './../images/basket.png'

class AllProducts extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {},
      isLoading: true,
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  componentWillMount() {
    const localStorageRef = localStorage.getItem('checkoutState');
    this.props.client.checkout.create().then((res) => {

      // re-instate checkout state
      let merged = {...res, ...JSON.parse(localStorageRef)};

      this.setState({
        checkout: merged,
      });
    });

    this.props.client.product.fetchAll().then((res) => {
      this.setState({
        products: res,
        isLoading: false
      });
    });

    this.props.client.shop.fetchInfo().then((res) => {
      this.setState({
        shop: res,
      });
    });
  }

  componentDidUpdate() {
    // save checkout state
    localStorage.setItem('checkoutState', JSON.stringify(this.state.checkout));
  }

  addVariantToCart(variantId, quantity){
    this.setState({
      isCartOpen: true,
    });

    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]

    return this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="loader" />
      )
    }
    return (
      <div>
        {!this.state.isCartOpen &&
          <div className="App__view-cart-wrapper">
            <button className="app__view-cart" onClick={()=> this.setState({isCartOpen: true})}>
              <img src={BasketImage} alt="Basket" />
              Basket
            </button>
          </div>
        }

        <Products
          products={this.state.products}
          client={this.props.client}
          addVariantToCart={this.addVariantToCart}
        />

        <Cart
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />
      </div>
    )
  }
}

export default AllProducts;
