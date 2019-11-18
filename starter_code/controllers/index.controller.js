const Movie = require("../models/Movie");

exports.movies = async (req, res) => {

  const movies = await Movie.find({}).exec();
  console.log(movies)
  res.render("movies", {
    movies
  });
};


exports.moviesDetail = async (req, res) => {
  const {
    id
  } = req.params
  const movie = await Movie.findById(id)
  res.render('movieDetail', {
    movie
  })
}