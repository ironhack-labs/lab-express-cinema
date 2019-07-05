const express = require ("express")
const Movie = require ("../models/Movie")

const router = express.Router();

router.get('/', (req, res, next)=>{
    Movie.find({}, 'tittle image')
        .then(data =>{
            res.status(200).json(
                {text: "Error del servidor",
                data}
            )
        })
        .catch(err => {
            res.status(500).json({
                text: "Error del servidor",
                err: err
            })
        })
})



router.get('/:id', (req, res, next) =>{
    Movie.findById({_id:req.params.id})
    .then(theMovie => {
        res.status(200).json(theMovie)
    }).catch(err => {
        res.status(500).json({
            text: "Error del servidor",
            err: err
        })
    })
})

module.exports = router;
