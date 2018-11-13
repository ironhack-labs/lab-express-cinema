const mongoose = require('mongoose');
// create a new schema object
const Schema   = mongoose.Schema;




//3 then you make the rules about what a cat is

// you only need to do {type: string} if you are adding more rules like a default or minlength
const movieSchema = new Schema({
  title : String,
  director: String,
  stars: [String],
  image: [String],
  description: String,
  showtimes: [String]
  });

//3.1 you create the cat class using those rules
const Movies = mongoose.model('Movies', movieSchema);


module.exports = Movies;