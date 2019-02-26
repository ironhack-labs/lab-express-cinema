const express = require('expres');
const router = require('router');

router.get('/', (req, res, next) =>{
    if(!req.signedCookies.email) res.redirect('/login');
    else next();
});