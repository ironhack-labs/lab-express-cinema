// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs');

const logger = require('morgan');

const app = express();
app.use(express.static("public"))

app.use(logger('dev')); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// default value for title local
const projectName = 'lab-express-cinema';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

const Movie = require("./models/Movie.model")

app.get("/movies", (req, res) => {
    // data.forEach(movie => {
    //     Movie.create(movie)
    //         .then(res.render("views/movies", data))
    //         .catch(err => console.log(err))
    // })
    Movie.find()
        .then(movies => res.render("../views/movies", { movies }))
})

app.get("/:movieId", (req, res) => {
    Movie.findById(req.params.movieId)
        .then(movie => res.render("../views/detail", { movie }))
})


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
