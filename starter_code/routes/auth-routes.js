// BCrypt to encrypt passwords
const bcrypt        = require('bcrypt');
const bcryptSalt    = 10;
const express       = require('express');
const router        = express.Router();


// User model
const User          = require('../models/user');


// Sign up
router.get('/signup', (req, res, next) => {
    res.render('auth/signup');
});

router.post('/signup', (req, res, next) => {
    //get the user info from form
    const username = req.body.username;
    const password = req.body.password;
    //encrypt the password
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    //check if fields are filled in
    if (username === '' || password === ''){
        res.render('auth/signup', {
            errorMessage: 'Fill in a username and password to sign up'
        });
        return;
    }

    //check if username is still available
    User.findOne({ 'username': username })
    .then(user => {
        if (user !== null){
            res.render('auth/signup', {
                errorMessage: 'The username already exists!'
            });
            return;
        }
        //create user and redirect to homepage
        User.create({
            username,
            password: hashPass
        })

        .then((user) => {
            req.session.user = user;
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
        })
    })
    .catch(err => {
        console.log(err);
    })
});


// Login
router.get('/login', (req, res, next) => {
    res.render('auth/login');
});

router.post('/login', (req, res, next) => {
    //get user info from form
    const username = req.body.username;
    const password = req.body.password;

    //check if fields are filled in 
    if (username === '' || password === ''){
        res.render('auth/login', {
            errorMessage: `Please fill in both tthe username and password to sign up.`
        });
        return;
    }

    //check if username is in database
    User.findOne({ 'username': username })
    .then(user => {
        if (!user) {
            res.render('auth/login', {
                errorMessage: `The username does not exist.`
            });
            return;
        }

        //check if password matches the password in database
        if (bcrypt.compareSync(password, user.password)) {
            req.session.user = user;
            res.redirect('/movies');
        } else {
            res.render('auth/login', {
                errorMessage: `Incorrect password`
            });
        }
    })
    .catch(err => {
        console.log(err);
    })
});


// Logout
router.get('/logout', (req, res, next) => {
    req.session.destroy((err) => {
        if (err) {console.log(err)}
        res.redirect('/');
    });
});

module.exports = router;