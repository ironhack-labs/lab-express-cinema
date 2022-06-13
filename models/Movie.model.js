// models/Movie.model.js

        // To insert in "seeds/movies.seed.js"

const {Schema, model} = require('mongoose');

const movieSchema = new Schema(
    {
        title:String,
        director:String,
        stars:{type:[String]},
        image:String,
        description:String,
        showtimes:{type:[String]}
    }, {timestamps:true})

    //exporting 

    module.exports = model('Movie', movieSchema);