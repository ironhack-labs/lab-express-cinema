const mongoose = require("mongoose")

const moviesSchema = new mongoose.Schema(
    {
        title: String,
        director: String,
        image: String,
        description: String,
    }
)
const modeloDeMovies = mongoose.model('Movies', moviesSchema)

module.exports = modeloDeMovies 