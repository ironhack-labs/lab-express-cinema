const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        unique: true,
        type: String,
    },
    director: {
        type: String,
    },
    stars: [String],
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    showtimes: [String]

}, {
    timestamps: true
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie