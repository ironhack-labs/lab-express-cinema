var express = require('express')
var cookie = require('cookie-parser')
var app = express()

var movie  = require("../models/Movie")

app.get("/", (req, res) =>{
    if(req.cookies.LoggedIn){
        res.render("filmSearch")
    }
    else{
        res.render("index", {error: "You have not logged in, faggot"})
    }
})

/* POST MOVIE CHECK */

app.post("/filmmatch", (req, res) => {
    var titleToSearch = req.body.movieTitle
    console.log(titleToSearch)

    movie.find({movie: titleToSearch}, (err, result) => {
        console.log(result)
        res.render("filmSearch", {output: result[0]})
        if(err) console.log(err)
    }) //finding right movie

})

/*POST MOVIE CHECK END */

/*POST TO CREATE MOVIE*/
app.post("/movienew", (req, res, next) => {
       
    var temporalMovie = {
        movie: req.body.moviename,
        year: req.body.movieduration,
        director: req.body.moviedirector,
    }
    new movie(temporalMovie)
    movies.save()
    res.render("filmSearch", {output2: "Movie was uploaded correctly"})
 
 })

module.exports = router