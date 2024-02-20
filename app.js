require('dotenv/config');

const express = require('express');
const logger = require('morgan');

const path = require("path");

// Init configurations
require('./configs/hbs.config');
require('./configs/db.config');

const app = express();

app.use(express.static(`${__dirname}/public`));

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

// Application middlewares
app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));

// Application routes
const routes = require('./configs/routes.config');
app.use('/', routes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});