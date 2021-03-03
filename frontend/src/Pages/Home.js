import React from 'react'
import { Link } from 'react-router-dom'
import Carrousel from '../components/Carrousel'
import Paquetes from '../components/Paquetes'


const Home = ({ todosLosPaquetes, paquetesPorCategoria, obtenerTodosLosPaquetes, obtenerPaquetesPorCategoria }) => {
    
    return (
        <>
            <Paquetes/>
            <Link to="/usuario"><button>Library</button></Link> 
            <div>
                <Carrousel />
            </div>
        </>
    )
}

export default Home