const Movie = require("../models/Movie.model")


exports.getMovies = async (req, res) => {

    try {
        const foundMovies = await Movie.find({})
        console.log(foundMovies)
    
        res.render("movies",{
            data: foundMovies

        })

    }catch(error){

        console.log(error)

    }

    
}

// exports.getMoviesOne = async (req, res) => {

//     try {
//         const movieOne = req.params.id
//         console.log(movieOne)
//         const foundMovies = await Movie.findOne({title: movieOne})
//         console.log(foundMovies)
    
//         res.render("movies",{
//             data: foundMovies

//         })

//     }catch(error){

//         console.log(error)

//     }

    
// }
