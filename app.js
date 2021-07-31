// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

// requires movie model
const Movie = require('./models/Movie.model')

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs');

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// default value for title local
const projectName = 'lab-express-cinema';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/movies', (req, res) => {
    Movie.find()
    .then(allTheMoviesFromDB => {
      console.log('Retrieved movies from DB:', allTheMoviesFromDB)
      res.render('movies', { allMovies: allTheMoviesFromDB })
    })
})

app.get('/movies/:theID', (req, res) => {
    req.params.theID // ==> 61052265119dbf8593258766
    Movie.findById(req.params.theID)
      .then(oneMovie => {
        console.log('Retrieved book from DB:', oneMovie)
        res.render('movie-detail', { oneMovie: oneMovie })
      })
  });

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
