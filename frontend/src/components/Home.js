import React from 'react'
import { Link } from 'react-router-dom'
import Carrousel from '../components/Carrousel'
import PaquetesHeader from '../components/PaquetesHeader'


const Home = ({ todosLosPaquetes, paquetesPorCategoria, obtenerTodosLosPaquetes, obtenerPaquetesPorCategoria }) => {
    
    return (
        <>
            <PaquetesHeader/>
            <Link to="/usuario"><button>Library</button></Link> 
            <div>
                <Carrousel />
            </div>
        </>
    )
}

export default Home