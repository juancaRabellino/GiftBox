import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import categoriaActions from "../redux/actions/categoriaActions";
import { connect } from "react-redux";

const fotos = [{ img: 'Aventura.png', text: 'Aventura', color: '#FFC715' }, { img: 'bleds.jpg', text: 'Bleds', color: '#30d42a' }, { img: 'En casa.jpg', text: 'En casa', color: '#CA360C' }, { img: 'Entretenimiento.jpg', text: 'Entretenimiento', color: '#C7BBEC' }, { img: 'Estadias.jpg', text: 'Estadias', color: '#43DCB7' }, { img: 'Estar bien.jpg', text: 'Estar bien', color: '#B6B6EF' }, { img: 'Gastronomia.jpg', text: 'Gastronomia', color: '#FF4F6D' }]
const Carrousel = ({ todasLasCategorias }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  
  return (
    <div className='containerImg' style={{ width: '90vw', minHeight: '80vh', margin: 'auto' }}>
      <Slider {...settings}>
        {fotos.map(function (foto, i) {
          return (

            <div className='imgCarrusel' style={{ width: '35vw' }} key={`img${i}`}>
              <div style={{ backgroundImage: `url('./assets/fotos-carrusel/${foto.img}')`, height: '75vh', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'flex-end' }}>
                <h3 style={{ color: foto.color }}>{foto.text}</h3>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todasLasCategorias: state.categoriaReducer.todasLasCategorias
  }
}

const mapDispatchToProps = {
  obtenerTodasLasCategorias: categoriaActions.obtenerTodasLasCategorias
}

export default connect(mapStateToProps, mapDispatchToProps)(Carrousel)