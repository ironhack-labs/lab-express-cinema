
const bcrypt = require("bcrypt")
const bcryptSalt = 10
const express = require("express")
const app = express()

const User = require("../models/user")

app.get("/signup", (req, res, next) => {
  res.render("auth/signup")
})

app.post("/signup", (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  const salt = bcrypt.genSaltSync(bcryptSalt)
  const hashPass = bcrypt.hashSync(password, salt)

  if (username === "" || password === "") {
    res.render("auth/signup", {
      errorMessage: "Indicate a username and a password to sign up"
    })
    return
  }

  User.findOne({"username": username})
  .then(user => {
    if (user !== null) {
      res.render("auth/signup", {
        errorMessage: "The username already exists!"
      })
      return
    }
    User.create({
      username,
      password: hashPass
    })
    .then(() => {
      res.redirect("/")
    })
  })
  .catch(error => {
    console.log(error)
  })
})

app.get("/login", (req, res, next) => {
  res.render("auth/login")
})

app.post("/login", (req, res, next) => {
  const theUsername = req.body.username
  const thePassword = req.body.password

  if (theUsername === "" || thePassword === "") {
    res.render("auth/login", {
      errorMessage: "Please enter both, username and password to sign up."
    })
    return
  }

  User.findOne({ "username": theUsername})
  .then(user => {
    if (!user) {
      res.render("auth/login", {
        errorMessage: "This username does not exist"
      })
      return
    }

    bcrypt.compare(thePassword, user.password, function(err, equal) {
      if(err) {
        res.render("auth/login", {
          errorMessage: "Incorrect password"
        })
      } 
      if(equal) {
        req.session.user = user
        res.redirect("/movies")
      } else {
        next({message: "Incorrect password"})
      }
    })

    // if (bcrypt.compareSync(thePassword, user.password)) { //CHANGE TO "COMPARE"
    //   req.session.user = user

      // if (bcrypt.compareSync(thePassword, user.password)) { 
      // req.session.user = {username: user.username}  //more secure

      // res.redirect("/movies")
  })
  .catch(error => {
    next(error)
  })
})

app.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    // cannot access session here
    res.redirect("/login");
  });
});

module.exports = app;



// app.use("/movie", (req, res, next) => {
//   if(!req.session.user) res.send("Booooo")
//   else next()
// })