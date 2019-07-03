const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Movie = require('../models/Movies');


/* GET movies */
router.get('/', (req, res, next) => {


    Movie.find({}, {title: 1, image: 1})
        .then((lista) => {
            res.status(200).json(lista);
        })
        .catch(error => {
                res.status(500).json(
                    {text: "error de servidor", err}
                );
            }
        );


});


router.get('/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then(m => {
            res.status(200).json(m)
        })
        .catch(e => {
            res.status(500).json({error: err, text: "error de servidor"})
        })
});

module.exports = router;
