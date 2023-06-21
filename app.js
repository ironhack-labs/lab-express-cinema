// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

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

const Movie = require("./models/Movie.model");

app.get("/movies", (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render("movies", { movies });
    })
    .catch((error) => {
      console.error(error);
    });
});

app.get("/movies/:id", (req, res, next) => {
  const id = req.params.id;

  Movie.findById(id)
    .then((x) => {
      const movieDetails = x;
      res.render("details", { movieDetails });
    })
    .catch((err) => {
      console.log("Error:", err);
    });
});

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
