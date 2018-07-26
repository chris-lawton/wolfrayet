import React, { Component } from 'react';
import Image from './../images/etsy.png'

class Stockists extends Component {
  render() {
    return (
      <div className="container container--narrow stockists">
        <div>
          <p>
            Kim West 47,<br />
            Denmark Hill,<br />
            London,<br />
            SE5 8RS
          </p>

          <p>Tues-Sat 11-7</p>

          <p>Tel: 020 7703 6949</p>
        </div>

        <div>
          <p>Discover Wolf Rayet on</p>
          <a target="_blank" href="https://www.etsy.com/uk/shop/WolfRayetLondon">
            <img className="stockists__image" src={Image} alt="Etsy"/>
          </a>
        </div>

      </div>
    );
  }
}

export default Stockists;
