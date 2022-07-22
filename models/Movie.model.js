const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true,"Title is required"],
    },
    director: {
        type: String,
        required:[true,"Director is required"],
    },
    stars: {
       type: [String],
       required:[true,"Starts are required"]
    },
    image:{
        type: [String]
    },
    description:{
        type: [String],
       required:[true,"description is required"]
    },
    showtimes:{
        type: [String],
        required:[true,"showtimes is required"]
    }
})

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie
