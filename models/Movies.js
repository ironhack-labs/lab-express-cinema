'use strict';


const mongoose = require("mongoose");
const Schema= mongoose.Schema;

/**
 * Created by David on 29/06/2019.
 */



const MovieSchema = new Schema({
    title: {type: String},
    director: {type: String},
    stars: {type:[String]},
    image: {type:String},
    description: {type:String},
    showtimes: {type:[String]}
});

module.exports = mongoose.model('movie',MovieSchema);