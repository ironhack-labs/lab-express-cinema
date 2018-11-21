var express = require('express');
var app = express()
var cookie = require('cookie-parser')

var userProfile = require('../models/User')

app.get('/', (req, res) => {
    res.render('index')
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

/*POST LOG OUT START*/

app.post("/logOut", (req, res) => {
   res.clearCookie("LoggedIn")
   res.render("index", {output: "You have logged out"})
})

/*POST LOG OUT END */

module.exports = router