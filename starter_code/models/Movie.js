const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const movieSchema = new Schema({
    title : {type:String, unique:true},
    director: {type:String},
    stars: {type:Array},
    image: {type:String},
    description: {type:String},
    showtimes: {type:Array},
    created: {type:String}});
  
const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;