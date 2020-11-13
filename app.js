require('dotenv').config();

const express       = require('express');;
const hbs           = require('hbs');
const mongoose      = require('mongoose');
const path          = require('path');
const chalk         = require('chalk');

const app = express();

// require database configuration

require('./configs/db.config');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

const index = require('./routes/index');
app.use('/', index);
const movies = require('./routes/movies');
app.use('/movies', movies);

module.exports = app;

app.listen(process.env.PORT, ()=>{
  console.log(chalk.green.inverse.bold(`Conectado al puerto ${process.env.PORT}`));
});