const Movies = require ("../models/Movie.model")


const getMovies = async (req, res) => {
    try {
      const movies = await Movies.find();
      res.render("movies", { movies });
      
    } catch (err) {
      res.send(err);    
    }
  };







  module.exports = {
      getMovies
  }