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

//Models requires
require("./Models/User")
var movie  = require("./Models/Movie")
//Requiring model User to userProfile
var userProfile = mongoose.model("register")

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

//Get root --> index
app.get("/", (req, res) => {
    // var output = cookie.get("outMessage", "outMessage")
    res.render("index", {error : ""})
})

app.get("/filmSearch", (req, res) =>{
    if(req.cookies.LoggedIn){
        res.render("filmSearch")
    }
    else{
        res.render("index", {error: "You have not logged in, faggot"})
    }
})

app.get("/register", (req, res) =>{
    res.render("register")
})

/*LOG IN POST */

var errCount = 0

app.post("/loggedIn", (req, res) => {

    var userData = {
        username: req.body.username,
        password: req.body.password
    }

    userProfile.findOne({username: userData.username}, (err, data) => {
       
        if(err){console.log(err);} //Error in server
        else if(!data){
            res.render("index", {error: "Invalid credentials, if you want to create an accout press register"})
        } //If there is no match password I render index
        else{ //If none of the latter things happen I create a cookie for loggedIn and I redirect to the search film
           bcrypt.compare(userData.password, data.password)
           .then((match) => {
                if(match){
                    res.cookie('LoggedIn', true)
                    res.redirect("/filmSearch")
                }
           })
           .catch((err) => {
                console.log(err)
                res.render("index", {error: err})
            })
        }
    })  //Finding in database

})

/*LOG IN POST END */

/*REDIRECT POST START*/

app.post("register", (err, res) => {
    if(err) console.log("error")
    else res.redirect("register")
})

/*REDIRECT POST END */

/*REGISTER POST*/

app.post("/registerData", (req, res) => {
   
    var userData = {
        username: req.body.username,
        password: req.body.password
    }   
    
    bcrypt.hash(userData.password, 5)
        .then((encryptedPass) => {
            //Cookie missing It works!!!
            userData.password = encryptedPass   
            new userProfile(userData)
            .save()
            res.cookies('LoggedIn', true)
            res.redirect("filmSearch")
        })
        .catch((err) =>{
            console.log(err)
        })
    
    

})

/*REGISTER POST END*/

/* POST MOVIE CHECK */

app.post("/filmmatch", (req, res) => {
    var titleToSearch = req.body.movieTitle
    console.log(titleToSearch)

    movie.find({movie: titleToSearch}, (err, result) => {
        console.log(result)
        res.render("filmSearch", {output: result[0]})
        if(err) console.log(err)
    }) //finding right movie

})

/*POST MOVIE CHECK END */



/*POST LOG OUT START*/

app.post("/logOut", (req, res) => {
   res.clearCookie("LoggedIn")
   res.render("index", {output: "You have logged out"})
})

/*POST LOG OUT END */

/*POST TO CREATE MOVIE*/
app.post("/movienew", (req, res, next) => {
       
    var temporalMovie = {
        movie: req.body.moviename,
        year: req.body.movieduration,
        director: req.body.moviedirector,
    }
    new movie(temporalMovie)
    movies.save()
    res.render("filmSearch", {output2: "Movie was uploaded correctly"})
 
 })

//App.listen to port 3000
app.listen(3000, () =>{
    console.log("Listening to port")
})