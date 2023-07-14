// const mongoose = require('mongoose');
// const Movie = require('./models/Movie.model');

// mongoose.connect('mongodb://localhost:27017/myapp', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const movies = [
//   {
//     title: 'A Wrinkle in Time',
//     director: 'Ava DuVernay',
//     stars: ['Storm Reid', 'Oprah Winfrey', 'Reese Witherspoon'],
//     image: 'https://example.com/image1.jpg',
//     description: 'Following the discovery of a new form of space travel...',
//     showtimes: ['13:00', '15:30', '18:00', '20:10', '22:40']
//   },
//   // Add more movie objects here
// ];

// Movie.insertMany(movies)
//   .then(() => {
//     console.log('Movies seeded successfully');
//     mongoose.connection.close();
//   })
//   .catch((error) => {
//     console.error('Error seeding movies:', error);
//     mongoose.connection.close();
//   });

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

const moviesIndex = require('./routes/movies')
app.use('/movies', moviesIndex)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;