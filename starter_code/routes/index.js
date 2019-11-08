const express = require("express");
const router = express.Router();

const MovieModel = require("./../models/Movies");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res) => {
  // find tout les movies
  MovieModel.find().then(dbRes => {
    // attendre le res de la db dans le then()
    // render la view en lui donnant le dbRes en argument
    res.render("movies", {
      movies: dbRes
    });
  });
});

router.get("/movies/:id", (req, res) => {
  MovieModel.findOne({ _id: req.params.id }).then(dbRes => {
    res.render("movie", {
      movie: dbRes
    });
  });
  // findOne le movies dont l'id est passé dans l'url (req.params...)
  // attendre le res de la db dans le then()
  // render la view en lui donnant le dbRes en argument
  // res.send(movie);
});
// title : "Red Sparrow",
//     director: "Francis Lawrence",
//     stars: ["Jennifer Lawrence", "Joel Edgerton", "Matthias Schoenaerts"],
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg",
//     description: "Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.",
//     showtimes: ["13:00", "15:30", "18:00", "20:10", "22:40"]
module.exports = router;
