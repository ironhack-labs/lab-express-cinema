
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: { type: [String] },
    image: String,
    description: String,
    showtimes: { type: [String] }
}, {
    timestamps: true
});

const Movies = mongoose.model("Movie", movieSchema);

module.exports = Movies;
