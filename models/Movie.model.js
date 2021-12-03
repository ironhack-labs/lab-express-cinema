const { schema, model } = require("mongoose");
const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema ({
    title: String,
    director: String,
    stars: [],
    image: String,
    description: String,
    showtimes: []
})

module.exports = model("Movie", movieSchema)