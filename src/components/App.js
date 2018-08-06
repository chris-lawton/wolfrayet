import React, { Component } from 'react';
import Slider from "react-slick";
import Slide1 from './../images/carousel/1.jpg';
import Slide2 from './../images/carousel/2.jpg';
import Slide3 from './../images/carousel/3.jpg';
import Slide4 from './../images/carousel/4.jpg';
import Slide5 from './../images/carousel/5.jpg';
import Slide6 from './../images/carousel/6.jpg';
import Slide7 from './../images/carousel/7.jpg';
import Slide8 from './../images/carousel/8.jpg';
import Slide9 from './../images/carousel/9.jpg';
import Slide10 from './../images/carousel/10.jpg';
import Slide11 from './../images/carousel/11.jpg';
import Slide12 from './../images/carousel/12.jpg';

class App extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          <img src={Slide1} alt="" />
          <img src={Slide2} alt="" />
          <img src={Slide3} alt="" />
          <img src={Slide4} alt="" />
          <img src={Slide5} alt="" />
          <img src={Slide6} alt="" />
          <img src={Slide7} alt="" />
          <img src={Slide8} alt="" />
          <img src={Slide9} alt="" />
          <img src={Slide10} alt="" />
          <img src={Slide11} alt="" />
          <img src={Slide12} alt="" />
        </Slider>
      </div>
    );
  }
}

export default App;
