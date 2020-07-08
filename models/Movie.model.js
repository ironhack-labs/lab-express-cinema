const  mongoose  = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    stars: [String],
    image: String,
    description: String,
    showtime: [String]
}) 

const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;