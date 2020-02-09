/*
Require the model and the Schema from mongoose.
Create an new Schema that will be our movies model.
Finally we export this model that will be named Movies based on the movieSchema that
we created for it to be used in every other part of our app.
*/

const { model, Schema } = require('mongoose')
const movieSchema = new Schema({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array,
});

module.exports = model('Movies', movieSchema)
