const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


// Modelo con validación de datos y conversión de 'name'
const movieSchema = new Schema({
  title : String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String]
})



// Crear modelo pasando a .model() el nombre del modelo y el esquema
const Movie = mongoose.model('Movie', movieSchema);


// Exportar el modelo para requerirlo en otros módulos
module.exports = Movie;
