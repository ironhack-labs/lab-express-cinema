const express =  require ("express")

const Movie = require('../models/Movie.model')
const router = express.Router();

router.get('/', (req, res, next) => res.render('index'));

