// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');
const app = express();
const hbs = require('hbs');
const connectDB = require('./db/index');
require('dotenv').config();


require('./config')(app);
app.use(express.urlencoded({ extended: true }));
connectDB()


// 2. MIDDLEWARES
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');


// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

app.use('/movies', require('./routes/movies'))

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
