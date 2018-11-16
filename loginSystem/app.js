//Requiring all modules
const express = require('express')
const hbs = require('hbs')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const path = require('path')
const cookieParser = require('cookie-parser')
var cookie = false;

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
app.use(bodyParser.urlencoded({extended: false})) //Post Body Parser
app.use(bodyParser.json()) //Parser for JSON files
app.use(cookieParser())

//Setting partials
hbs.registerPartials(__dirname + "/views/partials")

//Get root --> index
app.get("/", (req, res) => {
    // var output = cookie.get("outMessage", "outMessage")
    res.render("index", {error : ""})
})


/*LOG IN POST */

var errCount = 0

app.post("/loggedIn", (req, res) => {
    var userData = {
        username: req.body.username,
        password: req.body.password
    }
   
    //Checking database
    userProfile.find({})  //Finding in database
    .then((registers) =>{ //Finding in registers directory
        registers.forEach((data) =>{ //If any of the registers object username is a match with the input then check passowr
            if(data.username == userData.username){
                if(data.password == userData.password){ //If password = input then redirect with message
                    // docCookies.setItem("LoggedIn", "true")
                    cookie = true;
                    res.render("filmSearch")
                }
                else{ //Else incorrect password 
                    res.render("index", {error : "Invalid data"})
                    errCount++;
                }
            }
            else if(errCount > 3){ //If none of the password nor the username is a match I ask if he wants to register and if that true I redirect to register page
                var check = prompt("Do you want to register?")
                if(check){
                    res.redirect("/register")
                }
                else{
                    res.redirect("/")
                }

            }
            else{
                res.render("index", {error: "Invalid data"}) //Using render because with redirect and send data at the same time
            }
        })
    })
    .catch((err) =>{
        console.log("Not found "+err)
    })
})

/*LOG IN POST END */

/*REGISTER POST*/

app.post("/registerData", (req, res) => {
   
    var userData = {
        username: req.body.username,
        password: req.body.password
    }   
    new userProfile(userData)
    .save()
    .then(() => {
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
   cookie = false;
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
app.listen(3252, () =>{
    console.log("Listening to port")
})