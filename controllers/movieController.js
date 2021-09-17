const Movie        = require("./../models/movies")

//CAMINO A HOME
//http://localhost:3000/books
exports.home=(req,res)=>{

res.render("index")

}

//http://localhost:3000/movies
exports.listMovies=(req,res)=>{
//Encontrar los datos de la base de datos
Movie.find({})//Todas las peliculas sin filtro
        .then((dbMovies)=>{
                //2. ENVIARLOS AL CLIENTE
                console.log(dbMovies);
                
                res.render("movies",{   //EL mongo nos manda un array con la info, pasarla a obj
                    moviesList:dbMovies
                })
            
               
        })

        .catch((e)=>{
                console.log(e)       
         })


}


//http://localhost:3000/id

exports.oneMovie=(req,res)=>{

    //console.log(req.params) me regresa un objeto con la propiedad id
    //Destructuracion de objetos
    const {id}=req.params
    Movie.findById(id)
    .then((movie)=>{
        //la peliucla ya es un objeto que viene del mongo por eso se puede madar
        //sin ser transformado
        res.render("single",movie)
    })
    .catch((e)=>{
        console.log(e)
    })
}