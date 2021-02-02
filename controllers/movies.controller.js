const Movie = require('../models/Movie.model')


module.exports.movies = (req, res, next) => {
    Movie
    .find({})
    .then((m) => {
        console.log(m)
        res.render('movies', { m })
    })
    .catch(e => console.log(e))
}

module.exports.movie = (req, res, next) => {
    const r = req.params.id

    Movie
        .findById(r)
        .then((m) => {
            res.render('detail', { m })
        })
        .catch(e => console.log(e))
}