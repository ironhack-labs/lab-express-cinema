require('dotenv').config();

// Libraries
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const sass = require('node-sass-middleware');
const logger = require('morgan');
const path = require('path');
const app_name = require('./package.json').name;
const Movies = require('./models/Movie.js');
const data = require('./bin/seeds.js');
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
);

// Routes
const index = require('./routes/index');

// Database connection
mongoose
  .connect('mongodb://localhost/Movies', { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

Movies.deleteMany({})
  .then()
  .catch();

Movies.insertMany(data).then(movies => {
  for (movie of movies) {
    console.log(movie.title);
  }
});

const app = express();

// Configure settings for app server
app.set('views', path.join(__dirname, 'views')); // Express View engine setup
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  sass({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    sourceMap: true
  })
);

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

app.use('/', index);

module.exports = app;
