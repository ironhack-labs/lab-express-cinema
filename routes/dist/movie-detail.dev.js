"use strict";

var express = require('express');

var router = express.Router();

var Movie = require('../models/Movie.model');

router.get('/books/:id', function (req, res) {
  var id = req.params.id;
  Book.findById(id).then(function (movieDet) {
    // console.log(bookToEdit);
    res.render('movies-detail', movieDet); // <-- add this line
  })["catch"](function (error) {
    return console.log("Error while getting a single book for edit: ".concat(error));
  });
});