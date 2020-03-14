require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

const Movies = require('./models/Movies');



mongoose
  .connect('mongodb://localhost/cinema-project', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
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
hbs.registerPartials(__dirname + "/views/partials");


// default value for title local
app.locals.title = 'Cinema Ironhack';

app.get('/', function(req, res, next) {
  res.render('index');
});




app.get('/movies/add', (req, res, next) => {
  res.render("movies-add");
});

app.post('/movies/add', (req, res, next) => {
  const { title, director, stars, image, description, showtimes } = req.body;
  const newMovie = new Movies({ title, director, stars, image, description, showtimes})
  newMovie.save()
  .then((movie) => {
    res.redirect('/movies');
  })
  .catch((error) => {
    console.log(error);
  })
});



app.get('/movies', (req, res, next) => {
  Movies.find()
    .then(allTheMoviesFromDB => {
      // console.log('Retrieved books from DB:', allTheBooksFromDB);
      res.render('movies', { movies: allTheMoviesFromDB });
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
});

app.get('/results', (req, res, next) => {
  res.render("results");
});


app.get('/movies/:moviesId', (req, res, next) => {
  console.log(req.params.moviesId)
  Movies.findById(req.params.moviesId)
    .then(theMovies => {
      res.render('results', { movies: theMovies });
    })
    .catch(error => {
      console.log('Error while retrieving book details: ', error);
    })
});


module.exports = app;
