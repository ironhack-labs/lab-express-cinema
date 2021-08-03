const express = require('express');
const app = express.Router();

/* GET home page */
app.get('/', (req, res, next) => res.render('index'));

module.exports = app;
