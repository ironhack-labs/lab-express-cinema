const mongoose = require('mongoose')
const Schema = mongoose.Schema

var userSchema = new Schema({
    username: String,
    password: String,
})

mongoose.model("register", userSchema) //The string has to be the name of the directory you are looking for