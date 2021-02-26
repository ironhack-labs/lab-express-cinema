const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
       title : String,
       director: String,
       stars : [String],
       image : String,
       showtimes : [String], 
});

const MovieModel = mongoose.model("movie", movieSchema);

module.exports = MovieModel;