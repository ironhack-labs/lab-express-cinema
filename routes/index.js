/* const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => res.render('index'));

module.exports = router; */


const express = require('express');
const router = express.Router();
const Cinemas = require('../models/Movie.model')

router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    console.log('16')
    Cinemas.find()
        .then(data => {
            console.log(data)
            res.render('movies', {data})
        })
});
router.get('/movie/:id', (req, res, next) => {
    const {id }= req.params
    Cinemas.findById(id)
    .then(data => {
        res.render('one-movie', data)
    })
   
})


module.exports = router;
