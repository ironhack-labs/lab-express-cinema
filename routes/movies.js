const express = require("express");
const router = express.Router();
const Moviemodel = require("./../models/Movie.model");

router.get('/', (req, res, next) => {
    Moviemodel.find()
    .then(movieCollection => {
        console.log(movieCollection[0].title)
    res.render('movies',{movieCollection});
})
    .catch(error=>console.log(error))
});

module.exports = router;