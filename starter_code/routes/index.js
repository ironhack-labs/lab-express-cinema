const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {

	// todo make hbs helper instead
	// https://stackoverflow.com/questions/31222495/conditional-class-for-html-using-pure-handlebars
	res.locals.bodyClass = 'home';

	res.render('index');
});

module.exports = router;