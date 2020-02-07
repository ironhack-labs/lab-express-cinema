require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const Movie = require('./models/movie.model')

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



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



const index = require('./routes/index');
app.use('/', index);



app.listen(process.env.PORT)

module.exports = app;



app.get('/movies', (req, res) => {
  
  Movie.find()      
      .then(allMovies => {
          console.log(`Se encontraron ${allMovies} peliculas:`)
          res.render('movies', {movies: allMovies})     
      })
      .catch(err => console.log("Se produjo un error...." + err))
  })

  app.get('/movies/:id', (req, res) => {
    console.log(req.params)
    Movie.findById(req.params.id)
    .then(movieDetail => {
              console.log(`La pelicula tiene estos detalles ${movieDetail}`)
              res.render('movie-details', {movie: movieDetail} )
          })
          .catch(err => console.log("Se produjo un error...." + err))
})