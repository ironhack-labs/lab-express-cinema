const Movie = require("../models/Movie");

exports.moviesView = async (req, res) => {
  Movie.find().then(movies => {
    console.log(movies)
    res.render("moviesview", {
      movies
    })
  });
};


exports.moviesDesc = async (req, res) => {
  Movie.find().then(movies => {
    console.log(movies)
    res.render("movie-description", {
      movies
    })
  });
};