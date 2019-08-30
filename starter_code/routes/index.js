const express = require('express');
const router  = express.Router();
const MovieModel = require("./../models/Movie"); // importing the model from the Movie.js file.

/* GET home page */
router.get('/', (req, res, next) => {
  const data = { title: "Home" };
  res.render('index', data);
});

router.get("/movies", (req, res, next) => {
  MovieModel.find()
  .then(dbResValue => {
    // console.log(dbResValue);
    res.render("movies", { movies: dbResValue }); // This is the new object we're creating from 
    //the schema of the data we put into Compass.
    // {movies....} is the key.
  })
  .catch(dbErr => {
    console.log(dbErr);
  });
});

router.get('/movies/:id', (req, res, next) => {
  console.log("hey !!!", req.params.id); // "re.params.id" gets the ":id" part in the url.
  MovieModel.findOne({_id: req.params.id})
  .then(dbResValue => {
    console.log(dbResValue);
    res.render('movie', {movie: dbResValue});
  })
  .catch(dbErr => console.log(dbErr));
});

module.exports = router;

// Promise function

// Si ça fonctionne, alors affiche moi la page movies avec la réponse de ma requête, tous les films.
// La BDD: key:value (value = toute la BDD). Movie à déclarer sinon il ne sait pas ce que c'est, pour
// pouvoir l'appeler plus tard.

