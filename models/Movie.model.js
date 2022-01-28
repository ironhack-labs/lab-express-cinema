const { Schema, model } = require("mongoose");

const filmSchema = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})

const xxx = model("MovieCollection", filmSchema);
module.exports = xxx; 