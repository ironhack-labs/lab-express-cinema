const mongoose = require("mongoose")
const schema = mongoose.Schema

const movieSchema = new schema({
    title: {
        type: String
    },
    director: {
        type: String
    },
    stars: [{
        type: String
    }],
    image: {
        type: String
    },
    description: {
        type: String
    },
    showtimes: [{
        type: String
    }]
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie