require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');

const app_name = require('./package.json').name;
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
);

const app = express();

// require database configuration
require('./configs/db.config');

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

const seedDb = require('./bin/seeds');

const index = require('./routes/index');
app.use('/', index);

const Movie = require('./models/Movie.model.js');
const movies = require('./routes/movies');
app.use('/movies', (req, res) => {
  Movie.find()
  .then(allMovies => res.render('movies', allMovies))  
  .catch((error) => console.log('[app.js] Error occurred while finding Movies:', error))
})

const movie = require('./routes/movie');
app.use('/movie/:movieId', (req, res, next) => {
  const { movieId } = req.params;
  Movie.find({ _id : movieId})
  .then(theMovie => res.render('movie', theMovie[0])) 
  .catch((error) => console.log('[app.js] Error occurred while finding the Movie:', error))
})

module.exports = app;
