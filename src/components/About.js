import React, { Component } from 'react';
import Image from './../images/laura.jpg'

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="about">
          <img className="about__image" src={Image} alt="Laura"/>
          <div>
            <h2>BACKGROUND</h2>
            <p>Wolf Rayet is a British jewellery and fashion brand established in 2013. The jewellery is laser cut and crafted in London, All the jewellery is made from stainless steel and sterling silver chains. The name of the brand is taken from a famous dying star, bigger and brighter than the sun. Wolf Rayet as a brand is about making a bold statement, not afraid to stand out from the crowd. The pieces are designed to be an accent, transforming a whole outfit to make you feel and look special.</p>

            <h2>SHIPPING</h2>
            <p>Orders will normally be dispatched within 48 hours, during busy periods dispatch may take up to ten days.</p>

            <p>For regular updates, discounts and offers be sure to keep in touch by checking our Facebook, Twitter, blog etc etc</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
