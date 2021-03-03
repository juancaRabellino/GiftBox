import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
        <Link to="/usuario"><button>Library</button></Link> 
        <Link to="/registro"><button>Registro</button></Link> 
        </>
    )
}

export default Home