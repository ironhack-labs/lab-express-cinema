// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const router = require("express").Router();

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

// const app = express();
// const Movie = require("/models/Movie.model");

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require("./config")(app);

// default value for title local
const projectName = "lab-express-cinema";
const capitalized = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/", index);

// movies route
router.get("/movies", (req, res, next) => {
  Movie.find()
  .then((movies) => {
    console.log('Retrieved movies from DB:', movies);
    res.render('movies', {movies})
    
  }).catch((error) => {
    console.log('Error while getting the books from the DB: ', error); 
    // Call the error-middleware to display the error page to the user
    next(error);
    
  });
});

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
// I did the second
// module.exports = router;
