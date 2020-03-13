require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const router = express.Router();
const moviesAPI = require("./models/Movie")

mongoose
  .connect('mongodb://localhost/Movies', {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

hbs.registerPartials(__dirname + "/views/partials/detailed-move.hbs");

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



const index = require('./routes/index');

app.use('/', index);
app.get('/movies', (req, res, next) => {
  moviesAPI.find()
    .then(allTheMoviesFromDB => {
      console.log('Retrieved movies from DB:', allTheMoviesFromDB);
      res.render('movies', {
        allTheMoviesFromDB
      });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })

});

app.get("/detailed-movies", (req, res, next) => {
  moviesAPI.find()
    .then(allTheMoviesFromDB => {
      console.log('Retrieved movies from DB:', allTheMoviesFromDB);
      res.render('detailed-movies', {
        allTheMoviesFromDB
      });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
})


module.exports = app;