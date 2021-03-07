const Paquete= require("../models/Paquete");
const paqueteController ={
    agregarPaquete: (req, res)=>{
        const {nombre,precio,fecha,categoria,descripcion,cantidadPersonas,ubicacion,stock,cantidadVendidos,valoracion,opiniones,productos,imagen}=req.body;
        const paqueteAagregar = new Paquete({
            nombre,precio,fecha,categoria,descripcion,cantidadPersonas,ubicacion,stock,cantidadVendidos,valoracion,opiniones,productos,imagen
        })
        paqueteAagregar.save()
        .then(nuevoPaquete=>{return res.json({success:true, response: nuevoPaquete})})
        .catch(error=>{return res.json({success:false, error:"Error al cargar el paquete"})})
    },
    todosLosPaquetes: (req,res)=>{
        Paquete.find()
        .then(data=>{return res.json({success:true, response:data})})
        .catch(error=>{return res.json({success:false, response:"Error al obtener los paquetes"})})
    },
    unPaquete: (req,res)=>{
        Paquete.findOne(req.params)
        .then(data=>{return res.json({success:true, response:data})})
        .catch(error=>{return res.json({success:false, response:"Error al obtener el paquete"})})
    },
    eliminarPaquete: async (req, res) => {
        Paquete.findOneAndDelete(req.params)
        .then(()=>{return res.json({success:true, response: "Paquete Borrado"})})
        .catch(error=>{return res.json({success:false, response: "Error al eliminar el paquete"})})
    },
    editarPaquete: async(req,res)=>{
        const {idUsuario,valor}=req.body
        const paqueteActualizado= await Paquete.findOneAndUpdate(req.params,{$push:{"valoracion":{idUsuario, valor}}},{new:true})
        if(paqueteActualizado){
            res.json({success:true, response: paqueteActualizado})}
        else{res.json({success:false,response:"Error al editar el paquete"})}
    }
}

module.exports= paqueteController;