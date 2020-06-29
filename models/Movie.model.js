const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moviesSchema = new Schema({
    title: String
});

const movie = mongoose.model("movie", moviesSchema);
module.exports = movie; 