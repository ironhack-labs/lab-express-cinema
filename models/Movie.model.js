//Mongo automaticamente va a crear una coleccion con el mismo nombre pero cambiando la primera letra a minuscula y añadiendo una s al final.


//1. Importar mongoose
const mongoose = require(`mongoose`)
//2. Importar Schema a partir de mongoose
const Schema = mongoose.Schema
const movieSchema = new Schema({
    title:{type:String},
    director:{type:String},
    stars:{type:[String]},
    image:{type:String},
    description:{type:String},
    showtimes:{type:[String]}
}, {versionKey:false})

//4.Crear el modela User a partir del esquema userSchema

const Movie = mongoose.model(`Movie`, movieSchema)

//5. Exportar el modelo
module.exports = Movie