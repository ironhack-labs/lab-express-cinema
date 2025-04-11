const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const Movie = require("./models/movie.models.js");

require("dotenv/config");

const app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// Connect to MongoDB
const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lab-express-cinema";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });


// Home route
app.get("/", (req, res) => {
  res.render("index"); // Home page
});

app.get('/movies', (req, res) => {
    res.render( 'movies'); 
})

// Movies list route

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      res.render('movies', { movies }); 
    })
    .catch(err => {
      console.log('Error fetching movies:', err);
      next(err);
    });
});

module.exports = router;

// Movie details route
router.get('/movie/:id', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id)
    .then(movie => {
      res.render('movie-details', { movie });
    })
    .catch(err => {
      console.log('Error fetching movie details:', err);
      next(err);
    });
});

// Error handling
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

module.exports = app;
