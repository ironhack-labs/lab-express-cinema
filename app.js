
require('dotenv/config');


require('./db');
const Movie = require("./models/movies.model")
const express = require('express');


const hbs = require('hbs');

const app = express();


require('./config')(app);


const projectName = 'lab-express-cinema';
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = "IronCinema"


const index = require('./routes/index');
app.use('/', index);

app.get("/movieList", (req, res) => {
    Movie
        .find()
        .then(data => {
            res.render('movie-list', { data })
        })

})
app.get('/details/:id', (req, res) => {
    const { id } = req.params


    Movie
        .findById(id)
        .then(data => {
            console.log(data)
            res.render('details', data)

        })
        .catch(err => console.log('The error while searching albums occurred: ', err))

});

require('./error-handling')(app);

module.exports = app;
