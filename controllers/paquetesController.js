const Paquete = require("../models/Paquete");
const paquetesController = {
    agregarPaquete: (req, res) => {
        const { nombre, precio, fecha, categoria, descripcion, cantidadPersonas, ubicacion, stock, cantidadVendidos, valoracion, opiniones, productos, imagen } = req.body;
        const paqueteAagregar = new Paquete({
            nombre, precio, fecha, categoria, descripcion, cantidadPersonas, ubicacion, stock, cantidadVendidos, valoracion, opiniones, productos, imagen
        })
        paqueteAagregar.save()
            .then(nuevoPaquete => { return res.json({ success: true, response: nuevoPaquete }) })
            .catch(error => { return res.json({ success: false, error: "Error al cargar el paquete" }) })
    },
    todosLosPaquetes: (req, res) => {
        Paquete.find()
            .then(data => { return res.json({ success: true, response: data }) })
            .catch(error => { return res.json({ success: false, response: "Error al obtener los paquetes" }) })
    },
    unPaquete: (req, res) => {
        Paquete.findOne(req.params)
            .then(data => { return res.json({ success: true, response: data }) })
            .catch(error => { return res.json({ success: false, response: "Error al obtener el paquete" }) })
    },
    eliminarPaquete: async (req, res) => {
        Paquete.findOneAndDelete(req.params)
            .then(() => { return res.json({ success: true, response: "Paquete Borrado" }) })
            .catch(error => { return res.json({ success: false, response: "Error al eliminar el paquete" }) })
    },
    editarPaquete: async (req, res) => {
        console.log("FRAn")
        const { idUsuario, valor } = req.body
        const paqueteActualizado = await Paquete.findOneAndUpdate(req.params, { $push: { "valoracion": { idUsuario, valor } } }, { new: true })
        if (paqueteActualizado) {
            res.json({ success: true, response: paqueteActualizado })
        }
        else { res.json({ success: false, response: "Error al editar el paquete" }) }
    },
    agregarComentario: async (req, res) => {
        try {
            const { comentario, paqueteId } = req.body
            const { imagenUsuario, nombreUsuario } = req.user
            const idUsuario = req.user._id

            const response = await Paquete.findOneAndUpdate(
                { _id: artId },
                {
                    $push: {
                        opiniones: { imagenUsuario, comentarioUsuario, nombreUsuario, idUsuario }
                    }
                },
                { new: true }
            )
            res.json({
                success: true,
                response
            })
        } catch (error) {
            res.json({
                success: false,
                error
            })
        }
    },
    eliminarComentario: async (req, res) => {
        try {
            const { paqueteId, comentarioId } = req.params
            const response = await Paquete.findOneAndUpdate(
                { _id: paqueteId },
                {
                    $pull: {
                        opiniones: {
                            _id: comentarioId
                        }
                    }
                },
                { new: true })
            res.json({
                success: true,
                response
            })
        } catch (error) {
            res.json({
                success: false,
                error
            })
        }
    },
    editarComentario: async (req, res) => {
        try {
            const { comentarioId, paqueteId, comentarioEditado } = req.body
            const response = await Paquete.findOneAndUpdate(
                { _id: paqueteId, 'opiniones._id': comentarioId },
                {
                    $set: {
                        'opiniones.$.opinion': comentarioEditado
                    }
                },
                { new: true }
            )
            res.json({
                success: true,
                response
            })
        } catch (error) {
            res.json({
                success: false,
                error
            })
        }
    }
}

module.exports = paquetesController;