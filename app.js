// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');
mongoose = require("mongoose")

const Movie2 = require("./models/Movie.models") //// llamo al model para poder hacer consutlas a la base de datos

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs');

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// default value for title local
const projectName = 'lab-express-cinema';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();
// const capitalized2 = string => 

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);


app.get('/movies', (req, res) => {

    Movie2.find()
        .then(moviess => {
            console.log('The received data from the API: ', moviess);
            res.render("movies", { moviesss: moviess })//  movies con 2 s'lo coge del  then anterior y lo pone en moviesss con 3s para cgerlo en el movies.hbs

            //console.log(data.body.artists.items[0].name)
        })
    // res.render("movies")

})

app.get('/movies/:_id', (req, res) => {

    const { _id } = req.params

    Movie2.findById("_id")
        .then(moviess => {
            // console.log('The received data from the API: ', _id);
            res.render("movies", { id: _id })//  movies con 2 s'lo coge del  then anterior y lo pone en moviesss con 3s para cgerlo en el movies.hbs

            //console.log(data.body.artists.items[0].name)
        }).catch(err => console.log(err))
    // res.render("movies")

})

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
