const mongoose = require('mongoose')
const Schema = mongoose.Schema


const movieSchema = new Schema({
    title: { type: String },
    director: { type: String },
    stars: { type: Array },
    image: { type: String },
    description: { type: String },
    showtimes: { type: Array },

}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
})


const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

/* requerimos una serie de paquetes que son los que vamos a usar. Creamos nuestro esquema (plantilla)
que es el que vamos a usar. Importante!! poner lo de timmestamps.
Creamos una constante  que es la que exportaremos para que se use este esquema, esa constante, tiene como
parámetros, la misma constante y el nombre del esquema.
Por último, exportamos el esquema, el modelo */