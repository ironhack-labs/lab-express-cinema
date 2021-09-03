const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));



Movie
    .find()
    .then(movies => res.render('movies/list', { movies }))
    .catch(err => console.log(err))

    const { movie_id } = req.params
    console.log('NO ARRIESGO =====>', movie_id)

module.exports = router;