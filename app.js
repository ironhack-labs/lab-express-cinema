require('dotenv').config();


const express = require('express');
const app = express();
const logger = require('morgan');

require('./configs/db.config');


app.use(logger('dev'));

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`)


const routes = require('./configs/routes.config');
app.use('/', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Application is running at port ${port}`));