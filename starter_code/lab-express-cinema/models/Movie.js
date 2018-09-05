// the SCHEMA
const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; // get acces to schema contructor

const moviesSchema = new Schema({ 
// document structure & rules defined here
title: { type: String, required: true},
director: {type: String},
stars: [String],
image: {type: String},
description: {type: String},
showtimes: [String]
},{
// additional settings for Schema class
timestamps: true
});

const Movies = mongoose.model("Movie", moviesSchema);

module.exports = Movies;
