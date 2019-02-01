const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviSchema = new Schema({
title: String,
director: String,
star: Array,
image: String,
description: String,
showtimes: Array,
});
const movie = mongoose.model("movie", moviSchema);
module.exports = movie;