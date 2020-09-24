const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index', { title:'Cinema Ironhack', css:['index'] }));

module.exports = router;
