const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
}, {
    timestamps: true
});

const Movies = mongoose.model("Movies", MovieSchema);

module.exports = Movies;
