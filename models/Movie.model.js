//1. importaciones
const mongoose = require("mongoose");
const {
    Schema,
    model
} = mongoose;

//2.Schema

const MoviesSchema = new Schema({
    title: String,
    director: String,
    stars: [],
    image: String,
    description: String,
    showtimes: []
});
//3.Exports
module.exports = model('Movies', MoviesSchema);
