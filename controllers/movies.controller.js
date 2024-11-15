const movie =  require('../models/movie.model')


exports.home = (req,res,next) => {
    res.render('index')
}

exports.getMovies = (req, res, next) => {
    const { q } = req.query
    movie.find({ title: { $regex: new RegExp(q, "i") } }) 
        .then(movies => {
            res.render('movies' , {movies});
        })
        .catch(err => console.error(err))
};

exports.getMovie = (req, res, next) => {
    const { id } = req.params
    movie.findById(id)
        .then (movie => {
            res.render( 'movie', { movie })
        })   
        .catch(err => console.error(err))
}

exports.create = (req, res, next) =>{
    res.render('createMovie')
};

exports.doCreate = (req, res, next) =>{
    movie.create(req.body)
        .then(()=>{
            res.redirect('/')
        })
        .catch(err => console.error(err))
}

exports.deleteMovie = (req, res, next) =>{
    const { id } = req.params;
    movie.findByIdAndDelete(id)
     .then(() =>{
        res.redirect('/')
     })  
     .catch(err => console.error(err))
}
