// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs');

const app = express();

const Movie = require('./modules/Movie.model')

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// default value for title local
const projectName = 'lab-express-cinema';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

app.get('/movies', (req, res) => {
// access the database and load all movies, update the movies.hbs (through which the data is displayed)
    Movie.find()
        .then(allTheMoviesFromDB => {
            res.render('movies', { allMovies: allTheMoviesFromDB })
        }
        )
})

//path to the details of one choosen movie
app.get('/movies/:theID', (req, res) => {
    
    //how to access the id: 
    // req.params.theID 

    //accessing one specific movie:
    Movie.findById(req.params.theID)
      .then(oneMovie => {
        console.log('Retrieved movie from DB:', oneMovie)
        res.render('movie-detail', { oneMovie: oneMovie })
      })
  });

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
