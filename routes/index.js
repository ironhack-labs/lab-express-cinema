const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async(req, res) => {
    const moviesFromSeed = await MoviesModel.find();
    res.render('');
});
module.exports = router;
