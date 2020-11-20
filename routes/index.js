const express = require('express');
const router = express.Router();

/* GET home page */
const title = "Cinema Ironhack";
router.get('/', (req, res, next) => res.render('index', { title }));

module.exports = router;
