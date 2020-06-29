const express = require('express');
const router = express.Router();

/* GET teste page */
router.get('/test', (req, res, next) => res.send('Test Successfully'));

module.exports = router;
