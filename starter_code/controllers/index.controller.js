const Movie = require("../models/Movie");

exports.home = (req, res, next) => {
    res.render('index');
};
  
exports.movies = (req, res, next) => {
   
    Movie.find()
    .then(movies => {
        res.render("movies", {movies})
        console.log(movies)
    })
    .catch(err => console.log(err));

};

exports.moviesDetail = (req, res) => {
    const {id} = req.params;
    Movie.findById(id)
        .then(movie => res.render("detail", movie))
        .catch(err => res.render("detail", {err: "Does not exist"}));
};

