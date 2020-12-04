const movieModel = require("../models/Movie.model");

const movies = async (req, res) => {
    try {
        const allMovies = await movieModel.find();
        //console.log(allMovies);
        res.render("movies", { allMovies });
    } catch (err) {
      res.send(err);
    }
  };

  const movieInfo = async (req, res) => {
    try {
      const { filmId } = req.params;
      const film = await movieModel.findById(filmId);
      console.log(film)
      res.render("movieInfo", film);
    } catch (err) {
      console.log(err);
    }
  };
  
  module.exports = {
        movies,
        movieInfo,
  }