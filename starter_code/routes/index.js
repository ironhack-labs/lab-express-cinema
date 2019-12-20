const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index.hbs');
});

router.get('/movies', (req, res) => {
  // .send() deveria retornar o conteudo de seeds.js
  // res.send('queria ser uma lista de movies =(')
  res.render('movies.hbs', {problema: "queria ser uma lista de movies ='("})
})


module.exports = router;
