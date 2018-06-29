const PORT = 3000;

const express = require('express');
const app = express();
const hbs =  require('hbs');
const path = require('path');

const homeRouter = require('./routes/home.routes');

app.listen(PORT);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', homeRouter);




