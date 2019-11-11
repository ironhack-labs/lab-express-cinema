const express = require('express');
const router = express.Router();
const movieModel = require("../Models/Movie")

/* GET home page */

router.get('/info/:id', (req, res) => {
    movieModel
        .findById(req.params.id)
        .then(dbResp => {
            res.render("info", {
                movie: dbResp
            })
        })
})

module.exports = router;