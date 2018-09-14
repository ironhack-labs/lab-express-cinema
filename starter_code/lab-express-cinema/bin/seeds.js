const mongoose = require('mongoose');
const data = require('../data.js');
const Movie = require('../models/movies.js');


mongoose.connect('mongodb://localhost/lab-express-cinema', { useNewUrlParser: true })
.then(() => {
    return Movie.collection.drop();
})
.then(() => {
    return Movie.insertMany(data);
})
.catch(e => {
    console.log(e);
})
