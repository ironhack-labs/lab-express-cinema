const express = require('express')

module.exports.show = (req, res, next) => {
    res.render('../views/movies/home')
}