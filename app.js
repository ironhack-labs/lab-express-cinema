require('dotenv/config');

require('./db');

const express = require('express');
const hbs = require('hbs');
const app = express();

require('./config')(app);


app.locals.appTitle = 'Movies!';

const index = require('./routes/index');
app.use('/', index);

const movies = require('./routes/movies.routes')
app.use('/', movies)

require('./error-handling')(app);

module.exports = app;
