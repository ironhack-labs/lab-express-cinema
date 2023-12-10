const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index', { heroTitle: "Cinema Ironhack", actionButtonLabel: "Check the movies!" }));

/* GET movies page */
router.get('/movies', (req, res, next) => res.render('movies', { heroTitle: "Cinema Ironhack", actionButtonLabel: "Check the movies!" }));

module.exports = router;
