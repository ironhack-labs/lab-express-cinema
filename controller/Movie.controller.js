const MovieModels = require('../Model/Movie.model');


class MovieController {
  static async getAllMovies(req, res) {
    try {
      const results = await MovieModels.find();

      res.send(results);
    } catch (error) {
      console.log({ error })
    }
  }

  static async getInfoMovieById(req, res) {
    const { movieId } = req.params;
    try {
      const results = await MovieModels.findById(movieId);

      console.log(results);
      res.send(results);
    } catch (error) {
      console.log({ error })
    }

  }
}

module.exports = MovieController;
