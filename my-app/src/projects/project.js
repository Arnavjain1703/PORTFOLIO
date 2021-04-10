import React from 'react';
import './project.css';
import Item from './item/item'
//Owl Carousel Libraries and Module
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Owl Carousel Settings
const options = {
    responsiveClass: true,
    margin:0,
    autoplay: true,
    rewind:true,  fluidSpeed: 2000,
    autoplayTimeout:2000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 4,

      }
  },
};
class Project extends React.Component {
  render() {
      var A=[
         "/assets/P1.png",
         "/assets/P3.png",
         "/assets/P4.png",
         "/assets/P5.png",
         "/assets/P1.png",
         "/assets/P3.png",
         "/assets/P4.png",
         "/assets/P5.png",
      ]

    return (
<div className="projects">
                <div className="center"><u className="U">MY PROJECTS</u></div>

                  <OwlCarousel className="slider-items owl-carousel" {...options}>
                      {
                          A.map(order=>
                            {
                                return(<Item image={order}></Item>)
                            })
                      }
                  </OwlCarousel>
</div>
)
};
}

export default Project