const Movie = require('../models/Movie.model')

exports.listMovies = async (req,res) => {
    
    try {
        const foundMovies = await Movie.find({})
        
        res.render("movies",{
            data: foundMovies
        })
    } catch (error) {
        console.log(error)
    }  
}