const express = require("express");
const router = express.Router();
const MovieModel = require("./../models/Movie.model");

// GET movies page 

router.get("/", async (req, res, next) => {
        try {
                const moviesList = await MovieModel.find();
                res.render("movies", { moviesList })
        } catch (err) {
                next(err)
        }
})

router.get("/movie/:id", async (req, res, next) => {
        try {

                const movie = await MovieModel.findById(req.params.id)
                        .then(detail => {
                                console.log(detail.showtimes)
                                res.render("detailMovie", detail)
                        })
                        .catch(err => console.log(err))

        } catch (err) {
                next(err)
        }
})



module.exports = router;