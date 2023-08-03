const Movies = require("../models/Movie.model")

module.exports.list = (req, res, next) => {
    Movies.find()
        .then((movies) => {
            res.render("movies", { movies })
            
        })
        .catch(() => {})
}
