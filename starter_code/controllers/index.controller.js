const express = require("express");
const Movie = require("../models/Movie");
const router = express.Router();

exports.home = async (req, res)=> {
    res.render("index");
}

exports.movies = async (req, res) => {
    const pelis = await Movie.find();
    res.render("movies", { pelis });
  };

exports.movie = async (req, res)=>{
    const {id} = req.params;
    console.log(id)
    const oneMovie = await Movie.findOne({_id: id });
    res.render("movie", {oneMovie})
};

/*exports.info = async (req, res) => {
  
  const {_id } = req.params;
  const data = await Movie.findOne({_id});
  res.render("/info", {data});
}*/