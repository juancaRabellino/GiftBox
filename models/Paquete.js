const mongoose = require("mongoose");
const paqueteSchema= new mongoose.Schema({
    nombre: String,
    precio: Number,
    fecha: Date, 
    categoria: String,
    descripcion:String,
    cantidadPersonas: Number,
    ubicacion:String,
    cantidadVendidos:[{type: mongoose.Schema.ObjectId , ref: "usuario"}],
    valoracion: [{
        idUsuario:{type:String,required:true},
        valor: Number
    }],
    opiniones: [{
        idUsuario:{type:String,required:true},
        nombreUsuario: {type: String, required:true},
        imagenUsuario: {type:String, required: true},
        comentarioUsuario: {type:String}
    }],
    productos:[{type: mongoose.Schema.ObjectId , ref: "producto"}]
})

const Paquete= mongoose.model("paquete",paqueteSchema);

module.exports= Paquete;