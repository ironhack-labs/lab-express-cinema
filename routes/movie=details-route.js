const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  // const { title, image } = req.body;
  // console.log(`THIS IS => ${req.query}`);
  Movie.find({})
  .then( (resultFindMovie) => {
    console.log(`Movie details found! ${resultFindMovie}`);

    res.status(200).render('movie-details', { movies : resultFindMovie });
  })
  .catch( err => {
    console.error(`error when loading movie details: ${err}`);
  });
});

module.exports = router;