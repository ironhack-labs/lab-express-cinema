require('dotenv/config');

require('./db');

const express = require('express');
const hbs = require('hbs');
const app = express();

require('./config')(app);

app.locals.appTitle = 'El MEJOR CINE';

// index routes
const indexRoutes = require('./routes/index.routes');
app.use('/', indexRoutes);

// movies routes
const moviesRoutes = require('./routes/movies.routes')
app.use('/peliculas', moviesRoutes)


require('./error-handling')(app);

module.exports = app;
