const Tweet = require('../models/movie.model');

module.exports.list = (req, res, next) => {
    Movie.find()
    .then((tweets) => {
        console.log(movies);
    res.render ('movies/list', { movies })
})
.catch((error) => next(error))
}