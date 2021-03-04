const mongoose = require('mongoose')

const categoriaSchema = new mongoose.Schema({
  nombre: String,
  texto: String,
  imagen: String
})
const Categoria = mongoose.model('categoria', categoriaSchema)
module.exports = Categoria