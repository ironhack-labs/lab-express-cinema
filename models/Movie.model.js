beforeEach( async () => {
    for (m of movies) {
        const movies = new movies(m)
        await movies.save()
    }
})
