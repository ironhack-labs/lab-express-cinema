require('dotenv').config();

const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');
const express       = require('express');
const favicon       = require('serve-favicon');
const hbs           = require('hbs');
const mongoose      = require('mongoose');
const logger        = require('morgan');
const path          = require('path');
const chalk         = require('chalk');


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

const index = require('./routes/index');
const Movie = require('./models/Movie.model');



app.use('/', index);

module.exports = app;

app.get('/', (req, res, next) => {
  res.render('index');
})

app.get('/movies', (req, res, next) => {
  Movie.find({}, {title: 1, imagen: 1})
  .then((movie) => {
    console.log(movie)
    res.render('movies', {movie});
    
  })
  .catch((err) => {
    console.log(err)
    res.send(err)
  })
  
})

app.listen(process.env.PORT, ()=>{
  console.log(chalk.green.inverse.bold(`Conectado al puerto ${process.env.PORT}`));
});