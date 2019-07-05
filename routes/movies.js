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


router.post('/', (req, res, next) => {

    let title = req.body.titulo;
    let image = req.body.foto;

    let data = {title, image};

    Movie.create(data)
        .then((movie) => {
            console.log('ok');
            res.status(200).json({text: "OK"});
        }).catch(error => {
            res.status(500).json({text: "Error", err: error});
    });

});


module.exports = router;
