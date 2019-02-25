const express      = require('express');
const app = express();
const hbs          = require('hbs');
const mongoose     = require('mongoose');

app.set('view engine', 'hbs');
app.set('views',__dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/cinema', { useNewUrlParser: true }, function(err) {
    if(err) console.log("ERROR")
    else console.log("connected")
})

const index = require('./routes/index')
const movies = require('./routes/movies')
const singleMovie = require('./routes/singleMovie')
app.use('/', index)
app.use('/', movies)
app.use('/', singleMovie)

app.listen(3000, () => {
    console.log("listening")
})