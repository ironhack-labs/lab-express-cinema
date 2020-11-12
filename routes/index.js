module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/listOfMovies', require('./movies.routes.js'))
     app.use('/movie/detalle/:movie_id', require('./moviesDetails.routes.js'))
}
