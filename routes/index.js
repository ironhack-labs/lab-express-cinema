const express = require('express');
const router = express.Router();
const movie = require('./../seeds/movies.seed')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
console.log([movie])
module.exports = router;
