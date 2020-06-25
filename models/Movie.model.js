const mongoose = require('mongoose')
const Schema = mongoose.Schema


const moviesSchema = new Schema({
    title: {
       type: String
    },
    director: {
        type: String
    },
    stars: {
        type: [String]
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    showtimes: {
        type: [String]
    }
},
{
    timestamps: true
})

const Movie = mongoose.model('Movies', moviesSchema)

module.exports = Movie