const Movie = require("./../models/Movie")
 
exports.getAllMovies = async(req, res)=>{
   const allMovies = await Movie.find({})
   //console.log(allMovies)
   res.render("movies",{
       data:allMovies
   })

}

exports.getMovie =  async(req, res)=>{
    const singleMovieID = req.params.movieId
    const getTheMovie =  await Movie.findById(singleMovieID)
    //console.log(getTheMovie)
    res.render("movieSelected",{
        data:getTheMovie
    })

}