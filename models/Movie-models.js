const express = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const movie = new Schema({
    title: String,
    director: String,
    stars: [],
    image: String,
    description: String,
    showtimes: []
})

const Movie = mongoose.model('Movie', movie);

module.exports = Movie;