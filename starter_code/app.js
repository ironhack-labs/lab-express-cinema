require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const Movie = require('./models/Movie');
const movies = require('./bin/seeds');

mongoose
  .connect('mongodb://localhost/starter-code', { useNewUrlParser: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    return Movie.insertMany(movies);
  })
  .then((moviess) => {
    moviess.forEach((movie) => {
      console.log(movie);
    });
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err);
  });

const appName = require('./package.json').name;
const debug = require('debug')(`${appName}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true,
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Cinema Ironhack';

const index = require('./routes/index');
const moviesRouter = require('./routes/movies');
const movieRouter = require('./routes/movie');

app.use('/index', index);
app.use('/movies', moviesRouter);
app.use('/movie', movieRouter);

module.exports = app;
