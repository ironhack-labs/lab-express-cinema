
const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema ({

    title: { 
        type: String,
        required: true
    },

    director: {
        type: String,
    },
    stars: {
        type: [String],    

    }, 
    image:{
        type: String,
        default: 'http://www.cylabeth.com/ironhack/dbmovies/gen_mov.jpg'
    },
      
    description:{
        type: String
    },

    showtimes:{
        type: [String]
    },

})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie