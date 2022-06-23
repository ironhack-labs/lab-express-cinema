const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model.js');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {

    Movie.find()
        .then(data => {
            res.render('movies', { data: data });
        })
        .catch(err => console.log(err))

})

router.get('/movie/:id', (req, res) => {
    const { id } = req.params;
    Movie.findById(id)
        .then(data => {
            console.log(data)
            res.render('movie', data);
        })
        .catch(err => console.log(err));
});
module.exports = router;
