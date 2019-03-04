
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MovieSchema = new Schema({
director: String,
stars: [String],
image: String,
description: String,
showtimes: [String]
},
{timestamps:true}
)

const Movie = mongoose.model("Movie", MovieSchema)

module.exports = Movie