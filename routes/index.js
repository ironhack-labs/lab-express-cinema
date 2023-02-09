const express = require('express');
const Film = require('../models/Movie.model');
const { find } = require('../models/Movie.model');
const router = express.Router();


router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res,) => {
    Film
        .find()
        .then(data => {
            console.log(data)
            res.render('movies', { data })
        }).catch(err => {
            console.log('Ay la verga!!', err)
        })
})

router.get('/esaPeliculitaBonita/:Film_id', (req, res) => {
    const { Film_id } = req.params
    Film
        .findById({ Film_id })
        .then(data => {
            console.log(data)
            res.render('esaPeliculitaBonita', data)
        }).catch(err => {
            console.log('Ay la verga!!', err)
        })
})



module.exports = router;
