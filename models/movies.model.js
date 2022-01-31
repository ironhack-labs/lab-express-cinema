const {model, Schema} = require("mongoose");

const moviesSchema = new Schema( {
    title: String,
    director: String,
    stars:Array,
    image: String,
    description: String,
    showtimes:Array

},
{timestamp:true});

module.exports = model("Movies",moviesSchema );