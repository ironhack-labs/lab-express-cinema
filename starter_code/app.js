require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const Movie = require("./models/Movie")


mongoose
  .connect('mongodb://localhost/starter-code', { useNewUrlParser: true })
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


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Iron Cinema';



const index = require('./routes/index');
app.use('/', index);

app.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movie) => {
      res.status(200).render("movies", { movie })
    })
    .catch(err => {
      console.log("In Movies" + err)
    })
})
app.get("/movie/:id", (req, res, next) => {
  Movie.findById({_id:req.params.id})
    .then((movie)=>{
      console.log(movie)
      res.status(200).render("movie",{movie})
    })
    .catch(err=>{
      console.log("In Each Movie"+err)
    })
})

module.exports = app;
