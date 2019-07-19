const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "hbs");
app.use(express.static('public'))

const Schema = mongoose.Schema;

const Movie = mongoose.model('movies', new Schema({
    id: String,
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
}), "movies");

mongoose.connect('mongodb://localhost/cinema', {useNewUrlParser: true}, (err)=> {
    debugger
    if(err) console.log("ERROR EROROROR", err)
    else console.log("connected")
});

app.get('/', (request, response) => {

    response.render('index');
});


app.get("/movies", (request, response) => {
    Movie.find({})
        .then((movies)=> {
            console.log(movies)
            response.render("movies.hbs", {movies : movies})
        })
        .catch(error => {
            console.log(error)
          })  
})

app.get("/movies/:id", (request, response) => {
    let movieId = request.params.id
    Movie.findById(movieId)
        .then((movie) => {
            console.log(movie)
            response.render("info.hbs", {movie : movie})
        })
        .catch(error => {
            console.log(error)
        }) 
})

app.get("/info", (request, response) => {
    Movie.find({})
        .then((movies)=> {
            console.log(movies)
            response.render("movies.hbs", {movies : movies})
        })
        .catch(error => {
            console.log(error)
          })  
})

app.listen(3000, ()=> {
    console.log("App listening")
})