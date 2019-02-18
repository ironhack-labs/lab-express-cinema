require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

const seed         = require('./bin/seeds.js')
const Movie        = require('./models/Movie.js')


mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


//Clear Database and then re-seed
Movie.deleteMany({})
  .then(obj => {
    console.log('This many movies were deleted: ', obj);
    console.log(seed);
    seed.forEach(element => {
      Movie.create(element)
        .then(data => {console.log('The movie was created and its data is the following: ', data)})
        .catch(err => {console.log('An error occurred: ', err)});
    });
  })
  .catch(err => {
    console.log('An error occurred: ', err);
  });




  
// default value for title local
app.locals.title = 'Cinema Ironhack';



const index = require('./routes/index');
app.use('/', index);


module.exports = app;
