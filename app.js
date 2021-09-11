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

// We've already created a Movies Router, we require it (so we can use), then we create the route
const movieRouter = require("./routes/movies");
app.use("/movies", movieRouter);

// 1. Make sure the users can arrive DONE
//     - Create the route (usually on app.js), add a console.log() DONE
// 2. Display something DONE
//     - Create the view that will render (hbs file) DONE
//     - Add some content to the view DONE
// 3. Display the movies
//     - Get movies data from the DB
//     - Display them in hbs

// //     - Get movies data from the DB
// We have all of them in a mongo DB
// -> We don't care the seed file, we need to look for the data on the DB
// Query the DB
// -> We have the data
//
// We display the data, movies.hbs

// Seed file is only used once, then you don't use (from the moment that it runs, it's inmediately updated said god)

// Since you are creating the router object, you only need to specify the URL when you use app.use, inside the movies.js folder, you don't need to specify any router on the get since it will be called when you use the app.use. In the movies.js you add all the urls that start from /movies, like /movies/matrix.

// How does Routes work, we have a specific folder for them, for each parent route, we ne

// When you create a router object with express.Router(), all the routes start from the app.use that you used to call that router

// app.get("/movies", (req, res, next) => {
//   console.log("VIEWING MOVIES");

//   // Take all the data from the DB

//   const movies = {};

//   // Pass all the data into a view
//   res.render("movies", {
//     movies: movies,
//   });
// });

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
