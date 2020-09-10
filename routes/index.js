module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/movies', require('./base.movies.js'))


}