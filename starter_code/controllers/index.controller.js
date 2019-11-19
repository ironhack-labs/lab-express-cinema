const Movie = require("../models/Movie");

exports.home = async (req, res)=> {
    res.render("index");
}

exports.movies = async (req, res) => {

    const pelis = await Movie.find();
    res.render("movies", { pelis });
  };

exports.info = (req, res) => {
    const { id } = req.params
    .then(data => {
        const peli = Movie.findById(id)
        res.render("info", {peli});
      })
    .catch(err => {
        console.log(err)
    })     
}