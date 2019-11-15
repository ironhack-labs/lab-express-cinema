require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

mongoose
	.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to the DB'))
	.catch((err) => console.log(err));

const app = express();

// app.use(bodyParser({ extended: false }));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.locals.loggedUser = true;

const index = require('./routes/index.js');
app.use('/', index);

app.listen(process.env.PORT, () => {
	console.log(`Listening on ${process.env.PORT}`);
});
