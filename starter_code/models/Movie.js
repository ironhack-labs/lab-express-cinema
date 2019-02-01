const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
    title:{type:String, unique:true},
    director: String,
    stars:Array,
    image:String,
    description:String,
    showtimes:Array
})

module.exports = mongoose.model("Movie", movieSchema);