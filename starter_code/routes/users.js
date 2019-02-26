var express = require("express");
var router = express.Router();
var UserLogin = require("../models/User.js");
var bcrypt = require('bcrypt');

//signup
router.get('/users/signup',(req, res) => {
    res.render('signup');
  
});
  
router.post('/users/signup', (req, res) =>{
    const newUser = {
      email: req.body.email,
      password:req.body.password,
    };

    //debugger;
    //use bcrypt
    bcrypt.hash(req.body.password, 10, function(err,hash){
      //store hash in password db
      //debugger
      newUser.password = hash;
      UserLogin.create(newUser, (err) =>{
        if(err) {
            //debugger;
            console.log(err);}
        else {
            //debugger;
            res.redirect('/');
        }
      });
  
    });
       
});

//login
router.get('/users/login', (req, res)=>{
    res.render('login');
});


router.post('/login', (req, res) =>{
  UserLogin.find({email: req.body.email}, (err,result)=>{
    if(err)res.status(500).send('error');
    if(result.length ==0) res.status(403).send("invalid email");
      else{
        bcrypt.compare(req.body.password, result[0].password, function (err, equal) {
          if(err)res.status(500).send("error");
          else if (equal){
            res.cookie("email", req.body.email);
            // res.status(200).send("logged in");
            res.redirect('/movies');
          }else{
            res.status(403).send("invalid");
          }
          
        });
      }
  }
  );
});

//logout and clear cookies
router.get('/logout', (req,res)=>{
  res.clearCookie('email');
  res.send('logged out');
});

module.exports = router;
