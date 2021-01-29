const Movie = require("../models/Movie.model")

module.exports.list = (req, res, next) => {
    Movie.find(
        req.query.title
            ? {
            
        }: {}
    )
};