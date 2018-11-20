var express = require('express')
var cookie = require('cookie-parser')
var app = express()

var userProfile = require('../models/User')

app.get("/", (req, res) =>{
    res.render("register")
})

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


module.exports = router