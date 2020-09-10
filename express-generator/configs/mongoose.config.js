const mongoose = require('mongoose')
const Movies = require('../models/Movie.model')
const seed = require('../bin/seeds')

//console.log(seed)

mongoose
    .connect(`mongodb://localhost/${process.env.DB}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    
    .catch(err => console.error('Error connecting to mongo', err))

module.exports = mongoose