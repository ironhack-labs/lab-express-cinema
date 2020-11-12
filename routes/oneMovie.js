const express = require('express');
const router = express.Router();

/* GET movies page */
router.get('/movie/:id', (req, res, next) => {
    Movie.findById(req.params)
    .then(movie => {
        console.log(movie)
        res.render('one-movie')
    })
    .catch(err => console.error(err))
})

module.exports = router;