const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

// app.get('/movies', (req, res, next)=>{
//   Movie.find()
//   .then((listOfMovies)=>{
//   res.render('moves', {moviesArray: listOfMovies});
//   })
//   .catch((err)=>{
//       res.send(err);
//   })
// })

const Moviethings = mongoose.model('Moviethings', movieSchema);
module.exports = Moviethings;