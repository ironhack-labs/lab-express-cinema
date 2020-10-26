const { url } = require("inspector");
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema= new Schema({
 title:{type : String} ,
 director: {type :String},
 stars: {type:Array},
 image: {type:String , default: "https://images.media-allrecipes.com/images/75131.jpg"},
 description: {type: String},
 showtimes :{type: Array}


  
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;