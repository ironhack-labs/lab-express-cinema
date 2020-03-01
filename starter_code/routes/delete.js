const express = require('express');
const router = express.Router();
const Movies = require('../models/Movies');

router.get('/', (req, res) => {
    const id = req.query.id;
    Movies.findByIdAndRemove(id).exec()
    .then((movie)=>{return res.redirect('list')})
});


module.exports = router;

