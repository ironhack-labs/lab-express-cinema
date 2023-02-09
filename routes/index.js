const express = require('express');
const router = express.Router();
const Movies = require('./../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/allmovies', (req, res) => {


    Movies
        .find()
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log(err))


}
)

router.get('/movies/:movies_id', (req, res) => {

    const { movies_id } = req.params
    console.log('HOLLLLAAAA', movies_id)
    Movies
        .findById(movies_id)
        .then(movies => res.render('moviedetail', movies))
        .catch(err => console.log(err))


})
module.exports = router;
