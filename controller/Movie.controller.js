const MovieModels = require('../Model/Movie.model');

class MovieController {
  static async getAllMovies(req, res) {
    try {
      const results = await MovieModels.find();

      res.render('movies', { movies: results });
    } catch (error) {
      console.log({ errorGetAllMovies: error })
    }
  }

  static async getInfoMovieById(req, res) {
    const { movieId } = req.params;
    try {
      const results = await MovieModels.findById(movieId);

      res.send(results);
    } catch (error) {
      console.log({ errorGetInfoMovieById: error })
    }
  }

  static async getNewMovie(req, res) {
    res.render('formMovie')
  }
  static async postNewMovie(req, res) {
    const {
      movieTitle,
      movieDirector,
      movieStar,
      movieImage,
      movieDescription,
      movieShowTimes
    } = req.body;

    const newMovie = {
      title: movieTitle,
      director: movieDirector,
      start: movieStar,
      image: movieImage,
      description: movieDescription,
      showtimes: movieShowTimes
    }

    try {
      await MovieModels.create(newMovie);

      res.redirect('/movies')
    } catch (error) {
      console.log({ errorPostNewMovie: error })
    }
  }
}

module.exports = MovieController;
