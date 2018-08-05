import React, { Component } from 'react';
import Facebook from './../images/facebook.png'
import Twitter from './../images/twitter.png'
import Pintrest from './../images/pintrest.png'

class Contact extends Component {
  render() {
    return (
      <div className="container container--narrow grid">
        <div>
          <p>Follow Wolf Rayet on social media using the icons #wolfrayetlondon. If you need to get in touch drop drop us an email - <a href="mailto:info@wolfrayet.co.uk">info@wolfrayet.co.uk</a></p>
          <div className="social">
            <a target="_blank" href="https://www.facebook.com/wolfrayetlondon">
              <img src={Facebook} alt="Etsy"/>
            </a>
            <a target="_blank" href="https://twitter.com/wolfrayetlondon">
              <img src={Twitter} alt="Etsy"/>
            </a>
            <a target="_blank" href="https://www.pinterest.co.uk/wolfrayetlondon/">
              <img src={Pintrest} alt="Etsy"/>
            </a>
          </div>
        </div>
        <div>
          <form action="/" className="form" name="contact" method="POST" netlify>
            <input placeholder="Name" type="text" name="name" />
            <input placeholder="Email" type="email" name="email" />
            <textarea placeholder="Message" name="message"></textarea>
            <button className="button" type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
