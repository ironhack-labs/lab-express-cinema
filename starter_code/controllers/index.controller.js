const Movie = require("../models/Movie");

exports.movies = async (req, res) => {
  // Movie.find({}, (err, docs) => {
  //   console.log(docs);
  // });
  const movies = await Movie.find({}).exec();
  console.log(movies)
  res.render("movies", {movies});
};

// exports.moviesDetail = (req, res) => {
//   const { _id } = req.params;
//   Movie.findById(_id)
//     .then(movies => res.render("movieDetail", {movies}))
//     .catch(err => res.render("movieDetail", { err: "No existe" }));
// };


exports.moviesDetail = async(req, res) => {
  const {id} = req.params
  const movie = await Movie.findById(id)
  res.render('movieDetail', {movie})
} 