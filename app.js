// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

//onst Movie = require('./models/Movie.model');

//const MovieNew = require('./seeds/movies.seed');



// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

const path = require('path');


// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs');

const app = express();

const logger = require('morgan');

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// default value for title local
const projectName = 'lab-express-cinema';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;


app.use(logger('dev')); // logger de morgan para ver las peticiones que se hacen
app.use(express.json()); // para que el body de las peticiones se pueda leer y ver en terminal
app.use(express.urlencoded({ extended: true })); // para que el body de las peticiones se pueda leer

/** Configure static files */
app.use(express.static("public"));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, 'views/partials'));

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

/*const moviesSee = require('./views/movies');
app.use('/', moviesSee);

*/

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
