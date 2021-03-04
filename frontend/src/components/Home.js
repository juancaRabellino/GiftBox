import React from 'react'
import { Link } from 'react-router-dom'
import Carrousel from '../components/Carrousel'
import video from '../assets/videoHome.mp4'

const Home = () => {
    
    return (
        <>  
            <video src={video} autoPlay loop muted></video>
            <Link to="/usuario"><button>Library</button></Link> 
            
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
        </>
    )
}

export default Home