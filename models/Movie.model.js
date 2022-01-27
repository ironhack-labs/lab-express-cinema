const { Schema, model } = require("mongoose");

const filmSchema = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})

const Film = model("Film", filmSchema);
module.exports = Film;