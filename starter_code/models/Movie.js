let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let movieSchema = new Schema({
   title: String,
   director: String,
   stars: [String],
   image: String,
   description: String,
   showtimes: [String]
})

let Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;