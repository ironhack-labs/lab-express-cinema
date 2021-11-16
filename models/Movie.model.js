const mongoose = require('mongoose')

const Schema = mongoose.Schema

const moviesSchema = new Schema({
    title:{type:String},
    director:{type:String},
    stars:{type:Array},
    image:{type:String},
    description:{type:String}, 
    showtimes:{type:Array},

})  
