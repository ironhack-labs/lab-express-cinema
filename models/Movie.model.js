const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    stars: [String],
    image: {
        type: String,
        validator: (t) => {
            return t.startsWith('http')
        },
        message: "Your URL to the image must start with http/"
    },
    description: String,
    showtimes: [String]
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie