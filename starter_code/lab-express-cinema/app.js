require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const Movie = require('./models/Movie');



mongoose
    .connect('mongodb://localhost/lab-express-cinema', { useNewUrlParser: true })
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
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    sourceMap: true
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
//app.locals.title = 'Express - Generated with IronGenerator';



const index = require('./routes/index');
app.use('/', index);

app.get('/movies', (req, res, next) => {
    Movie.find({})
        .then(movies => {
            res.render('movies', { movies });
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })
});
/* Aquí con get creamos la ruta y le decimos que encuentre(find) todas las peliculas.
Usamos una promesa con su then y su catch por si hay error. En el caso de éxito, renderiza la vista movies, {peliculas como variable}
 */

app.get('/movies/:id', (req, res, next) => {
    Movie.findById({ _id: req.params.id })
        .then(movies => {
            res.render('movie', { movies });
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })
});





module.exports = app;