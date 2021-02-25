const express = require('express');
const router = express.Router();

const MovieModel = require("../models/Movie.model");

router.get('/', (req, res, next) => {
    MovieModel.find().then(moviesDb => {
        let data = {
            movies : moviesDb,
            css : ['movies']
        }
        res.render('movies', data)
    })
    .catch(dbErr => console.log(dbErr))
});

router.get('/:id', (req, res) => {
    MovieModel.findById(req.params.id)
    .then(movieDb => {
        res.render('movie', {
            movie : movieDb,
            showtimes : movieDb.showtimes.join(' | '), 
            css : ['movie']
        })
    })
    .catch(movieErr => {
        res.send('nope')
    })
})

module.exports = router;