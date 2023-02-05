//Required
const express = require('express');
const hbs = require('hbs');
const logger = require("morgan");
const index = require('./routes/index');

//App use
app.use(logger('dev')); 
app.use(express.json()); 
app.use('/', index);

//App set
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

require('./error-handling')(app);

//Require model url
const Movie = require("./models/Movie.model")

app.get("/movies", (req, res) => {
    Movie.find()
        .then(movies => res.render("../views/movies", { movies }))
})
