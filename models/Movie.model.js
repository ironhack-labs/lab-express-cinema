const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
},
    {
        timestamps: true,
    })

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie