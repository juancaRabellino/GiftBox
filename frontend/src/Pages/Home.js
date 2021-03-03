import React from 'react'
import { Link } from 'react-router-dom'
import Carrousel from '../components/Carrousel'


const Home = () => {
    return (
        <>
            <Link to="/usuario"><button>Library</button></Link> 
            <div>
                <Carrousel />
            </div>
        </>
    )
}

export default Home