const CargarPaquete = () => {
    return(
    <form className="adminCargaForm">
        <label>Nombre del paquete</label>
        <input type="text" name="" onChange=""></input>
        <label>Precio del paquete</label>
        <input type="number" name="" onChange=""></input>
        <label>Fecha del paquete</label>
        <input type="date" name="" onChange=""></input>
        <label>Descripción del paquete</label>
        <textarea></textarea>
        <label>Cantidad de personas</label>
        <input type="number" name="" onChange=""></input>
        <label>Ubicación</label>
        <input type="text" name="" onChange=""></input>
        <label>Nombre del paquete</label>
        <input type="file" name="" onChange=""></input>
        <button>Enviar</button>
    </form>
    )
}
export default CargarPaquete