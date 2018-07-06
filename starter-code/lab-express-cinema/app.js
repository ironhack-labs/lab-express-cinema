require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const Movie        = require('./models/moviestuff.js')

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/lab-express-cinema', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
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


  app.get('/movies', (req, res, next)=>{
    Movie.find()
    .then((listOfMovies)=>{
      res.render('movies',{moviesArray:listOfMovies});
    })
    .catch((err)=>{
      res.send(err); //Unprofessional because it shows error to user, but will in testing phase 
    })

  })


app.get('/movies/:id', (req, res, next)=>{
  const theID = req.params.id

  Movie.findById(theID)
  .then((theMovie)=>{
      res.render('singleMovie', {movie: theMovie})
  })
  .catch((err)=>{
    res.send(err);
  })
});







// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



const index = require('./routes/index');
app.use('/', index);


module.exports = app;
