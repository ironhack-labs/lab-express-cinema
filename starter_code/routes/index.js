const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/movies', (req, res) =>{
  res.render('movies')
})
module.exports = router;
