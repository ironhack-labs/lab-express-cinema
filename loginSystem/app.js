//Requiring all modules
const express = require('express')
const hbs = require('hbs')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const path = require('path')
const cookieParser= require('cookie-parser')
const bcrypt = require('bcrypt')


//Database connection
mongoose.connect("mongodb://localhost:27017/login")

//Requires
var index = require('./routing/index')
var filmsearch = require('./routing/filmSearch')
var register = require('./routing/register')

//Execute express
var app = express();

//We set all folders
app.set("view engine", "hbs") //Engine HBS
app.set("views", __dirname +"/views") //Folder views (templates)
app.use(express.static("public")) //Public is static (to get .js, images and .css)
app.use('/css',express.static(path.join(__dirname, 'public/stylesheets'))); //Css folder specified (NOT WORKING)
app.use(bodyParser.json()) //Parser for JSON files
app.use(bodyParser.urlencoded({extended: true})) //Post Body Parser
app.use(cookieParser()) //Using middleware cookie-parser

//Setting partials
hbs.registerPartials(__dirname + "/views/partials")

//Using routes
app.use("/", index) 
app.use('/filmSearch', filmsearch)
app.use('./register', register)

//App.listen to port 3000
app.listen(3000, () =>{
    console.log("Listening to port")
})