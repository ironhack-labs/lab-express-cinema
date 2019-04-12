const movieSchema = new Schema({

  title: { type: String },
  director: { type: String },
  stars: { type: Array },
  image: { type: String },
  description: { type: String },
  showtimes: { type: Array },

});

const Movie = mongoose.model('Movie', movieSchema);

const movie = {
  title: "Mamma Mia",
  director: "no lo se",
  stars: ["Pierce Brosnan", "Meryl Streep"],
  image: "https://images.media-allrecipes.com/images/75131.jpg",
  description: "is a musical",
  showtimes: ["13:50", "16:20", "19:20", "22:10"]
}

Movie.create(movie)
  .then(oneMovie => { console.log("MammaMia", oneMovie) })
  .catch(err => { console.log(err) })
console.log(seeds)

module.exports = Movie;


// Movie.insertMany(seeds)
//   .then((data) => { console.log(data) })
//   .catch(err => { console.log(err) })