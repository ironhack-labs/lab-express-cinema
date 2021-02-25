const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
    let data = {
        css : ['home']
    }
    res.render('index', data);
});

module.exports = router;
