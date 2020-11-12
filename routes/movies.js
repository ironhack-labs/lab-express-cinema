const express = require('express');
const router = express.Router();

/* GET movies page */
router.get('/movies', (req, res, next) => {
    Movie.find({}, {title: 1, image: 1})
    .then(movies => {
        res.render('movies', {movies})
    })
    .catch(err => console.error(err))
})

module.exports = router;