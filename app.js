// ℹ️ Gets access to environment variables/settings
require('dotenv').config()

require('./db');

const express = require('express');
const hbs = require('hbs');
const app = express();

require('./config')(app);

app.locals.title = 'Cinema';

const index = require('./routes/index');
app.use('/', index);

require('./error-handling')(app);

module.exports = app;
