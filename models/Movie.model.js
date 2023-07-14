// To insert in "seeds/movies.seed.js"


  
  // Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)
  
  // ... your code here

  // models/Movie.model.js



  //const { Schema, model } = require("mongoose");
  
 // const movieSchema = new Schema(
 // { 
 // title: String,
 // director: String,
  //stars: [String],
  //image: String,
 // description: String,
//  showtimes: [String]
//});

//const Movie = mongoose.model('movie', movieSchema);

//module.exports = Movie;

const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
    {
    title: {type: String, required: true, trim: true},
    director: {type: String, required: true, trim: true},
    stars: [{type: String, required: true, trim: true}],
    image: {type: String, trim: true},
    description: {type: String, trim: true},
    showtimes: [{type: String, trim: true}]
    }
, {timestamps:true})

const Movie = model("movies", movieSchema);

module.exports = Movie;
