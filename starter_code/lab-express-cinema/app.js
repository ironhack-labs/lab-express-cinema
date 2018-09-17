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
	.connect('mongodb://localhost/lab-express-cinema', {
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



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

app.get('/movies', (req, res, next) => {
	Movie.find({})
		.then(movies => {
			res.render('movies', {movies})
		})
		.catch(e => {
			console.log('Something went wrong', e);
		})
});

app.get('/movie/:movieId', (req, res, next) => {
	const movieId = req.params.movieId;
	Movie.findById(movieId)
		.then(movie => {
			const showtimesFormatted = movie.showtimes.split(",").join(" | ");
			res.render('detail', {movie, showtimes: showtimesFormatted});
		})
		.catch(e => {
			console.log('Something went wrong', e);
		})
});


const index = require('./routes/index');
app.use('/', index);


module.exports = app;