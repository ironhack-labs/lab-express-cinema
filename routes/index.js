const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    console.log(movies.find)
    Movies
        .find()
        .then(data => {
            res.render('movies')
        })
        .catch((e) => next(e));
})

router.get('/movies/:id', (req, res, next) => {

    Movies
        .findById()
        .then(data => {
            res.render('movies')
        })
        .catch((e) => next(e));
})

module.exports = router;