const PORT = 3000;

const express = require('express');
const app = express();
const hbs =  require('hbs');
const path = require('path');

const homeRouter = require('./routes/home.routes');
const moviesRouter = require('./routes/movies.routes');


require('./configs/db.config');

app.listen(PORT);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use('/', homeRouter);
app.use('/', moviesRouter);




