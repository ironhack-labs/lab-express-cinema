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

exports.details = (req, res) => {

      // 1. ENCONTRAR LOS DATOS EN LA BASE DE DATOS
      Movie.find({})
      .then((dbMovies) => {
          // 2. ENVIARLOS AL CLIENTE            
      
          res.render("movies/details", {
            movieList: dbMovies
          })
      })
      .catch(() => {})


}