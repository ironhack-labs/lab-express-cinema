//////// Adding connections that I believe weren't added!

const mongoose = require('mongoose');
const Movie = require('./models/Movie.model');





// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express

const express = require('express');
const app = express();

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require('hbs');

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);

// default value for title local
const projectName = 'lab-express-cinema';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// 👇 Start handling routes here

app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/movie-project";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });



const index = require('./routes/index');

app.use('/', index)


app.get('/movies', (req, res) => {
    Movie
        .find()
        .then((movies) =>{
            console.log('movies', movies);
            res.render('movies.hbs', {movies});
        })
        .catch(err => console.log("err fetching movies"))
});



app.get('/movie/:id', (req, res) =>{
    const movieId = req.params.id;

    Movie.findById(movieId)
      .then((movie) => {
        const movieDetails = movie;
        res.render('details', {movieDetails});
      })
      .catch((err)=>{
        console.log('Error:', err);
      })
})


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
