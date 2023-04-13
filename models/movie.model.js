const { model, Schema } = require('mongoose');
const movieSchema = new Schema({
    title: String,
    director: String,
    starts: [String],
    image: String,
    description: String,
    Showtimes: [String]
})
const Movie = model("Movie", movieSchema);
module.exports = Movie;