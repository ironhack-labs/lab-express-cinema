const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// this res.render will be equal to {{{body}}} in any route you are.
// router.get(/) -> will send you to the route you desire
// res.render(/whatever) -> will render the layout.hbs file with {{{body}}} equal to the /watever.hbs file

module.exports = router;
