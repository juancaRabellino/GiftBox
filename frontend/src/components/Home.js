import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Carrousel from '../components/Carrousel'
import video from '../assets/videoHome.mp4'
import paqueteActions from '../redux/actions/paqueteActions'
import { connect } from 'react-redux'
import LosMasRegalados from '../components/LosMasRegalados'

const Home = ({paquetesMasRegalados, filtrarPaquetesMasReg}) => {
    useEffect(() => {
      filtrarPaquetesMasReg()
    }, [])

    console.log(paquetesMasRegalados)
    return (
        <>  
            <video src={video} autoPlay loop muted></video>
            
            <div style={{width:'100%',height:'100vh',display:'flex',alignItems:'center'}}>
                <div style={{paddingLeft:'10vh'}}>
                    <h1 style={{color:'white',fontSize:'60px',fontWeight:'bold'}}>Regalá experiencias.</h1>
                    <p style={{color:'white',fontSize:'20px'}}>Sorprendé con momentos para vivir dentro y fuera de casa.</p>
                    <div style={{display:'flex', width:'35vw',justifyContent:'space-between',marginTop:'10vh'}}>
                        <p className='botonVideo'>Regala una GiftBox</p>
                        <p className='botonVideo'>Abri tu regalo</p>
                    </div>
                </div>
            </div>
            <div style={{marginTop:'5vh'}}>
                <Carrousel />
            </div>
            <div>
                <h2>Lo mas regalados</h2>
                <LosMasRegalados />
            </div>
        </>
    )
}

const mapStateToProps = state => {
  return {
    paquetesMasRegalados: state.paqueteReducer
  }
}

const mapDispatchToProps = {
  filtrarPaquetesMasReg: paqueteActions.filtrarPaquetesMasReg
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)