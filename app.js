require('dotenv/config')
require('./db')

const express = require('express')
const hbs = require('hbs')
const app = express()
const Movies = require('./models/Movie.model.js')

require('./config')(app)

const projectName = 'lab-express-cinema'
const capitalized = string => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)}- Generated with Ironlauncher`;



// ROUTING
const index = require('./routes/index');
app.use('/', index);

app.get('/movies', (req, res) => {
    Movies
        .find()
        .then(movie => {
            res.render("movies", { movie })
        })
        .catch(err => console.log(err))
})

app.get('/movie/:id', (req, res) => {

    // res.send('hello')
    Movies
        .findById(req.params.id)
        .then(selectedMovie => res.render('singleMovie', { selectedMovie }))
        .catch(error => console.log(error))

})



// ERROR HANDELING
require('./error-handling')(app);

module.exports = app;
