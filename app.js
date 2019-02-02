require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');


mongoose
  .connect('mongodb://localhost/express-cinema', { useNewUrlParser: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
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
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

const index = require('./routes/index');
const movies = require('./routes/movies');
app.use('/', index);
app.use('/movies', movies);


module.exports = app;
