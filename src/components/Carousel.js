import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import "/node_modules/slick-carousel/slick/slick.css"; 
import "/node_modules/slick-carousel/slick/slick-theme.css"; 

export default function MySlider( { list } ) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
            }
          }]
      };
      return (
          <Slider {...settings}>
              {list.map((item, index) => {
                return <Card {...item} key={index}/>
              })}
          </Slider>
      );
}