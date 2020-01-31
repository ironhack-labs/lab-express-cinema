const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
})


// const schema = new mongoose.Schema({
//     title: String,
//     director: String,
//     stars: [String],
//     image: String,
//     description: String,
//     showtimes: [String],
// })

const movieModel = mongoose.model("Movie", movieSchema)

// const movieModel = mongoose.model("Movie", schema);

module.exports = movieModel;