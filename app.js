require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
// const sass = require('node-sass-middleware');

const app_name = require('./package.json').name;
const debug = require('debug')(
    `${app_name}:${path.basename(__filename).split('.')[0]}`
);

const Movie = require('./models/Movie');

const app = express();

// require database configuration
require('./configs/db.config');

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
/*
app.use(sass.middleware({
    src: __dirname + '/public/stylesheets', //where the sass files are 
    dest: __dirname + '/public/stylesheets', //where css should go
    debug: true // obvious
}));
*/

// Express View engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

const index = require('./routes/index');
app.use('/', index);

module.exports = app;