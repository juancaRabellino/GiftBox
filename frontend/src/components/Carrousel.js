import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fotos = ['Aventura.png','bleds.jpg','En casa.jpg','Entretenimiento.jpg','Estadias.jpg','Estar bien.jpg','Gastronomia.jpg']
const Carrousel =()=> {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div style={{width:'90vw',minHeight:'80vh',margin:'auto'}}>
      <Slider {...settings}>
        {fotos.map(function(foto, i) {
          return (
                  <div style={{border:'2px solid red', margin:'5vh', width:'30vw'}} key={i}>
                    <div style={{backgroundImage:`url('./assets/fotos-carrusel/${foto}')`, width:'30vw', height:'70vh',backgroundSize:'cover',margin:'5vh'}}>
                      </div>
                  </div>
          );
        })}
      </Slider>
    </div>
  );
}


export default Carrousel

