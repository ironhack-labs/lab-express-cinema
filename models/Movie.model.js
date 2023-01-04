//1) Importar
const {Schema,model} = require("mongoose")
//2) Definir los campos del modelo
const moviesSchema = new Schema({

    title:{
        required: true,
        type: String,
    },
    director:{
        required: true,
        type: String
    },
    stars:{
        type: [String]
    },
    image:{
        required: true,
        type: String
    },
    description:{
        type: String,
        required: true
    },
    showtimes:{
        required: true,
        type: [String]
    }
    },
    {
    /**
     * lo usaremos mas tarde
     * _owner:{}
     */
},{timestamps:true})
//? timestamp => para colocar la fecha de creacion y actualizacion
//3) Exportar
const Movie = model("Movie", moviesSchema);
module.exports = Movie;