
require('dotenv/config');
require('./db');

const express = require('express');

const app = express();

require('./config')(app);


const projectName = 'IronHack Cinema';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;

const index = require('./routes/index.routes');
app.use('/', index);

require('./error-handling')(app);
module.exports = app;
