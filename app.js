require('dotenv/config');
require('./db/index');
const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

require('./config')(app);

const projectName = 'lab-express-cinema';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();
app.locals.title = `${capitalized(projectName)} - Generated with Ironlauncher`;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/movies'));

// Error handling
require('./error-handling')(app);

module.exports = app;
