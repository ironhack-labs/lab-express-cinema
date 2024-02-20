require('dotenv').config();
const express = require('express');
const path = require('path');

require('./configs/db.config');
require('./configs/hbs.config');

const app = express();

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname + '/public')))

const router = require('./configs/routes.config');
app.use('/', router);

const port = 3000;
app.listen(port, () => console.info( ` listen ${port}!! `));