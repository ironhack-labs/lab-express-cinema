const mongoose = require ('mongoose')
const dbName = 'express-cinema-dev'
mongoose.connect('mongodb://localhost/express-cinema-dev')

const Movie = require('../models/Movie.model')


const movie ={
    title: String,
    director: String,
    stars: [String,],
    image: String,
    description:String,
    showtimes: [String,]
}

