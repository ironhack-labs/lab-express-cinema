require('dotenv').config();

// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const express = require('express');
// const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const chalk = require('chalk');
const Movie = require('./models/Movie')
// const logger = require('morgan');
// const path = require('path');

// const app_name = require('./package.json').name;
// const debug = require('debug')(
//   `${app_name}:${path.basename(__filename).split('.')[0]}`
// );

const app = express();

// require database configuration
require('./configs/db.config');

// Middleware Setup
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

// Express View engine setup

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static((__dirname  + '/public')));
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


// default value for title local
app.locals.title = 'Cinema';

// const index = require('./routes/index');
// app.use('/', index);

// module.exports = app;

// HBS REGISTER HELPERS
hbs.registerHelper('lt', function(a, b) {
  return (a < b)
})

hbs.registerHelper('-', function(a, b) {
  return (a - b)
})

// ROUTES
app.get('/', (req, res)=>{
  console.log(chalk.green.inverse('Homepage'))
  res.render('index')
})

app.get('/movies', (req, res)=>{
  Movie.find({})
  .then((result)=>{
    res.render('movies', {data: result})
  })
  .catch((error)=>{
    console.log(error)
  })
})

app.get('/movie/:_id', (req, res)=>{
  Movie.findById(req.params._id)
  .then((result)=>{
    res.render('movie-details', {data: result})
  })
  .catch((error)=>{
    console.log(error)
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
