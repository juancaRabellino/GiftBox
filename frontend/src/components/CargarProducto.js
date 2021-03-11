const CargarProducto = () => {
    return(
    <form className="adminCargaForm">
        <label>Nombre del producto</label>
        <input type="text" name="" onChange=""></input>
        <label>Precio del producto</label>
        <input type="number" name="" onChange=""></input>
        <label>Fecha del producto</label>
        <input type="date" name="" onChange=""></input>
        <label>Descripción del producto</label>
        <textarea placeholder="Ingrese la descripción"></textarea>
        <label>Cantidad de personas</label>
        <input type="number" name="" onChange=""></input>
        <label>Ubicación</label>
        <input type="text" name="" onChange=""></input>
        <label>Nombre del producto</label>
        <input type="file" name="" onChange=""></input>
        <button>Enviar</button>
   </form>
    )
}
export default CargarProducto