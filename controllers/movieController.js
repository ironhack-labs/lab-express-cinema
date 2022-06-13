const Movie = require("./../models/Movie.model");

exports.getAllMovies = async (req, res) => {
  const allMovies = await Movie.find({});
  console.log(allMovies);
  res.render("movies", {
    data: allMovies,
  });
};

exports.getMovie = async (req, res) => {
  const movieID = req.params.movieID

	const getTheMovie = await Movie.findById(movieID)


	res.render("details", {
		data: getTheMovie
  });
};
