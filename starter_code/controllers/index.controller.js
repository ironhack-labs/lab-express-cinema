const Movie = require("../models/Movie");

exports.moviesView = async (req, res) => {
  Movie.find().then(movies => {
    res.render("moviesview", {
      movies
    })
  });
};


exports.moviesDesc = (req, res) => {
  const {
    id
  } = req.params
  console.log(id)
  Movie.findById(
    id
  ).then(movies => {
    res.render("movie-description", {
      movies
    })
  });
};