import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import categoriaActions from "../redux/actions/categoriaActions";
import { connect } from "react-redux";
import {BsFillStarFill} from 'react-icons/bs'

const fotos = [{ img: 'https://fotos.subefotos.com/1d7a81a511a8c8d60cf3bb0a6d611a87o.png', text: 'Cenas,vinos y muchas cosas mas para disfrutar en casa', precio: '$2290' }, { img: 'https://fotos.subefotos.com/b5531068aea1af0225c5b5f439d3d865o.png', text: 'Cenas,vinos y muchas cosas mas para disfrutar en casa', precio: '$2290' }, { img: 'https://fotos.subefotos.com/acd49dd9adaaaa722702bf4cfc3a9a13o.png', text: 'Cenas,vinos y muchas cosas mas para disfrutar en casa', precio: '$2290' }, { img: 'https://fotos.subefotos.com/ebfb2c22ba2ba2ff9bc851da4fdc1b15o.png', text: 'Cenas,vinos y muchas cosas mas para disfrutar en casa', precio: '$2290'}, { img: 'https://fotos.subefotos.com/0fe5564c9e292b1ee35cb9fbd216c2eco.png',text: 'Cenas,vinos y muchas cosas mas para disfrutar en casa', precio: '$2290' }, { img: 'https://fotos.subefotos.com/79e894a709c1e1ab6e9a08677721fac9o.png',text: 'Cenas,vinos y muchas cosas mas para disfrutar en casa', precio: '$2290' }, { img: 'https://fotos.subefotos.com/2a81eb9dfce6a0f0ed14d294387ffb8bo.png',text: 'Cenas,vinos y muchas cosas mas para disfrutar en casa', precio: '$2290' }]
const LosMasRegalados = () => {
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
            <div className='loMasRegalado' style={{ width: '35vw' }} key={`img${i}`}>
              <div style={{ backgroundImage: `url('${foto.img}')`, height: '35vh', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'flex-end' }}>
              </div>
              <div style={{margin:'15px 0 0 10px'}}>{[...Array(5)].map((m,i)=>{
                        const ratingValue = i +1
                            return (
                                <label key={`label${i}`}> 
                                    <BsFillStarFill className="star" color='#ffc107'/>
                                </label>
                            )
                        })}</div>
              <div className='precioDetalle'>
                <p>{foto.text}</p>
                <p className='precio'>{foto.precio}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(LosMasRegalados)