
const { Schema, model } = require('mongoose')


const filmsSchema = new Schema({
    title: {
        type: String,
    },
    director: {
        type: String,
    },
    stars: {
        type: [String],
    },
    image: {
        type: String,

    },
    description: {
        type: String,
    },
    showtimes: {
        type: [String],
    },

})


const Film = model('film', filmsSchema)

module.exports = Film