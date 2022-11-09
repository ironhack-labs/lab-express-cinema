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
const mongoose = require('mongoose')
const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// default value for title local
const projectName = 'lab-express-cinema';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);
const Movie = require('./models/Movie.model');
app.get('/movies', (req,res)=>{
    mongoose
  .connect('mongodb://localhost/lab-express-cinema')
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
    Movie.find({})
    .then ((data)=> {
        const moviesArray = data
        res.render('movies', {moviesArray})
    })
})

app.get('/movie/:id', (req,res)=>{
    Movie.find({_id:req.params.id})
    .then ((data)=> {
        const movieSearched = data;
        res.render('movie', {movieSearched})
})
    
})


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
