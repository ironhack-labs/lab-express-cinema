const {Schema, model} = require("mongoose") 


const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    stars: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    showtimes: {
        type: [String],
        required: true,
    }

})


//declaramos el modulo
const  Movie = model("Movie", movieSchema)
//exportamos el modulo
module.exports = Movie