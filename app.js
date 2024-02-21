require('dotenv/config');
require('./configs/db.config.js');

const express = require('express');
const hbs = require('hbs');
const app = express();
const logger = require('morgan');

app.set('view engine','hbs'); 
app.set('views', __dirname + '/views');

// Application middleware
app.use(logger('dev'));
app.use(express.urlencoded());
app.use((req, res, next) => {
    res.locals.currentPath = req.path;
    next();
})

const routes = require('./configs/routes.config');
app.use('/', routes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

app.listen(3000, () => console.log('listening on port 3000'));
