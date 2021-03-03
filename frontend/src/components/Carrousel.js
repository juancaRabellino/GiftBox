import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fotos = [{img:'Aventura.png',text:'Aventura',color:'#FFC715'},{img:'bleds.jpg',text:'Bleds',color:'#30d42a'},{img:'En casa.jpg',text:'En casa',color:'#CA360C'},{img:'Entretenimiento.jpg',text:'Entretenimiento',color:'#C7BBEC'},{img:'Estadias.jpg',text:'Estadias',color:'#43DCB7'},{img:'Estar bien.jpg',text:'Estar bien',color:'#B6B6EF'},{img:'Gastronomia.jpg',text:'Gastronomia',color:'#FF4F6D'}]
const Carrousel =()=> {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <div className='containerImg' style={{width:'90vw',minHeight:'80vh',margin:'auto'}}>
      <Slider {...settings}>
        {fotos.map(function(foto, i) {
          return (
<<<<<<< HEAD
                  <div style={{border:'2px solid red', margin:'5vh', width:'30vw'}} key={i}>
                    <div style={{backgroundImage:`url('./assets/fotos-carrusel/${foto}')`, width:'30vw', height:'70vh',backgroundSize:'cover',margin:'5vh'}}>
                      </div>
=======
                  <div className='imgCarrusel' style={{ width:'35vw'}}>
                    <div style={{backgroundImage:`url('./assets/fotos-carrusel/${foto.img}')`, height:'75vh',backgroundSize:'cover',backgroundPosition:'center',display:'flex',alignItems:'flex-end'}}>
                      <h3 style={{color:foto.color}}>{foto.text}</h3>  
                    </div>
>>>>>>> Ale
                  </div>
          );
        })}
      </Slider>
    </div>
  );
}


export default Carrousel

