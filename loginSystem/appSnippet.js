//Requires
const express = require('express'),
hbs = require('hbs'),
mongoose = require('mongoose'), 
bodyParser = require('body-parser'),
cookieParser = require('cookie-parser')

//Database
mongoose.connect('mongodb://localhost:27017/**')

//Express
var app = express()

app.set("view engine", "hbs") //Engine
app.set("views", __dirname +"/views") //Views hbs
app.use(express.static("public")) //Public folder
app.use(bodyParser.urlencoded({extended: false})) //Parser for Json and DB translation
app.use(cookieParser()) //Parser for cookies

hbs.registerPartials(__dirname + "views/partials") //Partials hbs

/*
Gets and posts with requires here

*/ 

app.get("/")
