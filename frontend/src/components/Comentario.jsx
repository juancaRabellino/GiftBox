import { connect } from 'react-redux'
import React, { useState } from 'react'
import paqueteActions from '../redux/actions/paqueteActions'

const Comentario = ({ paqueteId, comentario, loggedUser, eliminarComentario, editarComentario }) => {

  const [visible, setVisible] = useState(false)
  const [reComentar, setReComentar] = useState({})

  console.log(comentario)
  const enviarComentarioAEliminar = (e) => {
    e.preventDefault()
    eliminarComentario({
      paqueteId,
      token: loggedUser.token,
      comentarioId: comentario._id
    })
  }
  const modificarComentario = e => {
    const nombre = e.target.name
    const nuevoComentario = e.target.value
    setReComentar({
      ...reComentar,
      comentarioId: comentario._id,
      paqueteId,
      token: loggedUser.token,
      [nombre]: nuevoComentario
    })
  }
  const actualizarComentario = async (e) => {
    e.preventDefault()
    if (reComentar.ediartComentario === undefined) {
      setVisible(!visible)
      return false
    }
    await editarComentario(reComentar)
    setVisible(!visible)
  }

  return (
    <>
      <div className="comentarioContainer">
        <div className="infoUsuario">
          <div className="imagenDeUsuario" style={{
            backgroundImage: `url(${comentario.imagenUsuario})`
          }}></div>
          <div className="nombreDeUsuario">{comentario.nombreUsuario}</div>
        </div>
        {!visible
          ? <div className="comentario">"{comentario.comentarioUsuario}"</div>
          : <div>
              <input onChange={modificarComentario}></input>
              <button onClick={actualizarComentario}>ENVIAR MODIFICADO</button>
            </div>
        }

        <div>
          <button onClick={enviarComentarioAEliminar}>BORRAR</button>
          <button onClick={modificarComentario}>Editar</button>
        </div>
      </div>
      <div className="linea"></div>
    </>

  )
}

const mapStateToProps = state => {
  return {
    loggedUser: state.userReducer.loggedUser
  }
}

const mapDispatchToProps = {
  eliminarComentario: paqueteActions.eliminarComentario,
  editarComentario: paqueteActions.editarComentario
}

export default connect(mapStateToProps, mapDispatchToProps)(Comentario)