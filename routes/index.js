const express = require('express');
//const router = express.Router();

app = express();

// Handlebars, views, and partials
const path = require('path');
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));
const hbs = require('hbs');
hbs.registerPartials(path.join(__dirname, "../views/partials"));

// Use public folder
app.use(express.static(path.join(__dirname, '../public')));


// Movie Model
const Movie = require("../models/Movie.model");

/* GET home page */
app.get('/', (req, res, next) => {
    res.render('index');
  });


/* GET all movies */
app.get('/movies', (req, res, next) => {

    console.log("LISTING MOVIES....")

    Movie.find()
    .then( (movies) => { 
        console.log(movies)
        res.render("movies", { movies: movies }) 
    })
    .catch( (error) => res.render("error", { error: error } ))
    })


// Movie page
app.route("/movie/:id")
.get((req, res) => {
  Movie
    .findById(req.params.id)
    .then( (movie) => {
        res.render("moviePage", { movie: movie } )  
        console.log(`Showing movie: ${movie.name}`)
    })
    .catch( (error) => res.render("error", { error: error } ))
})


module.exports = app;
