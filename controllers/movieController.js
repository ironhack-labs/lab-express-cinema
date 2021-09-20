
const Movie = require("./../models/Movie.model")  

exports.listMovies = (req, res) => {

    // 1. ENCONTRAR LOS DATOS EN LA BASE DE DATOS
    Movie.find({})
        .then((dbMovie) => {
            // 2. ENVIARLOS AL CLIENTE            
            res.render("movies", { //su 2do elemento es un objeto
                movieList: dbMovie
            })

        })
        .catch(() => {})
    
}


exports.index = (req, res) => {

  res.render("index")
}

/*
const index = async (req, res) => {
  res.render("./index");
};

const singleMovie = async (req, res) => {
  const { movieId } = req.params;
  let movie = await Movie.findById(movieId);
  res.render("./movies", movie);
};

module.exports = {
  listMovies,
  index,
  singleMovie,
};
*/



/*

const Movie = require("./../models/Movie.model")  

exports.listMovies = (req, res) => {

    // 1. ENCONTRAR LOS DATOS EN LA BASE DE DATOS
    Movie.find({})
        .then((dbMovie) => {
            // 2. ENVIARLOS AL CLIENTE            
            res.render("views/movies", {
                movieList: dbMovie
            })

        })
        .catch(() => {})
    
}

const listMovies = async (req, res) => {
  let movies = await Movie.find({});

  res.render("views/movies", {
    movies: movies,
  });
};

/*Otro intento...
exports.sorting = (req, res) => {
  const { title, director, stars, description, showtimes } = req.body
      .then((all) => {
          res.redirect("/movies/movies")        
      })
      .catch((e) => {console.log(e)})

}


const singleMovie = async (req, res) => {
  const { movieId } = req.params;
  let movie = await Movie.findById(movieId);
  res.render("views/index");
};

module.exports = {
  listMovies,
  singleMovie,
};
*/ 