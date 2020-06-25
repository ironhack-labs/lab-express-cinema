const express = require('express');
const app = require('../app');
const router = express.Router()

/* GET home page */
router.get('/', (req, res) => res.render('index'))
router.get('/movies', (req, res) => res.render("./movies.js"))



module.exports = router;

 
