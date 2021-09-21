// movieController.js

const Movie = require("./../models/Movie") 


exports.listMovies = (req, res) => {

    // 1. ENCONTRAR LOS DATOS EN LA BASE DE DATOS
    Movie.find({})
        .then((dbMovies) => {
            // 2. ENVIARLOS AL CLIENTE            
          
          res.render("movies/index", {
            movieList: dbMovies
          })
        })
        .catch(() => {})
  
    
}

exports.Home = (req, res) => {

  res.render("movies/Home")
}

exports.oneMovie = (req, res) => {

  const {movieid} = req.params
  Movie.findById(movieid)
    .then((movie) => {
    
      res.render("movies/single", movie)
      
    })
    .catch((e) => {
      console.log(e)
    })

 

}