require('dotenv/config');

require('./db');

const express = require('express');

const hbs = require('hbs');

const app = express();

require('./config')(app);


app.locals.appTitle = `IronHack MovieTheater`;

//Index routes
const index = require('./routes/index.routes');
app.use('/', index);

// movies routes
const movies = require("./routes/movie.routes");
app.use("/movies", movies);

require('./error-handling')(app);

module.exports = app;
