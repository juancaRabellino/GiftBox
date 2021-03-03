const express = require("express");
const router = express.Router();
const validador=require("../controllers/validador");
const passport= require("passport");
require("../config/passport");

const productosController = require("../controllers/productosController");
const usuarioController = require("../controllers/usuarioController");
const paquetesController = require("../controllers/paquetesController");


// CONTROLADORES DE PRODUCTO 
router.route("/productos")
    .post(productosController.agregarProducto)
    .get(productosController.todosLosProductos);

router.route("/productos/:_id")
    .get(productosController.unProducto)
    .delete(productosController.eliminarProducto)
    .put(productosController.editarProducto)
router.route("/productos/paquete/:_id")
    .get(productosController.productosPorPaquete)
// CONTROLADORES DE PAQUETES 

router.route("/paquetes")
    .post(paquetesController.agregarPaquete)
    .get(paquetesController.todosLosPaquetes)

router.route("/paquetes/:_id")
    .get(paquetesController.unPaquete)
    .delete(paquetesController.eliminarPaquete)
    .put(paquetesController.editarPaquete)

// CONTROLADOR DE USUARIO
router.route('/usuarios/:_id')
    .put(usuarioController.editarUsuario)
    .delete(usuarioController.eliminarUsuario)
    .get(usuarioController.unUsuario)

router.route("/usuarios")
    .post(validador.validarNuevaCuenta,usuarioController.agregarUsuario)
    .get(usuarioController.todosLosUsuarios)

router.route("/login")
    .post(usuarioController.login)

module.exports=router;