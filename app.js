// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db/index');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs');

const logger = require('morgan');

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config/index')(app);

// default value for title local
//const projectName = 'Movies';
//const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

//app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;


app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static(__dirname + "/public"));

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;


