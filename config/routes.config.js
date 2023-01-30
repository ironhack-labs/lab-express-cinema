const express = require('express');

const router = express.Router();
const tweets = require('../controllers/movies.controller');
const common = require('../controllers/common.controller'); 

router.get('/tweets', tweets.list)
router.get('/', common.home)

module.exports = router;