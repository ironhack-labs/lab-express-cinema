const mongoose = require ('mongoose')

const movies = new mongoose.Schema ({
    title : {
        type : String,
        required : true
    },
    director : String,
    stars : [String],
    image : String,
    description : String,
    showtimes: [String]
})

const Movies = mongoose.model ('movies', movies)

module.exports = Movies
