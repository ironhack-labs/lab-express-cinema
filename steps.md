Iteration 0.
Debo hacer npm install. 

Iteration 1. 
Debo crear una carpeta llamada 'models' que dentro tiene un archivo 'movie.models.js'.
El archivo 'movie.models.js' contiene el esquema de cómo estará estructurada nuestra información en la base de datos. 
    Al inicio debo requerir mongoose y crear una constante que almacene el 'mongoose.schema'. 
    Para crear el schema siempre debo usar las palabras claves 'new Schema', ex: "const movieSchema = new Schema({})"
    Para finalizar, siempre debo crear una constante que almacena el metodo mongoose.model.
    De ultimo el module.exports.
Debo crear el archivo seeds.js, en este archivo se encontraran los primeros dato que almacenaremos en la base de datos, que se guardaran con la estructura que definimos en el modelo.
    Requerimos mongoose, requerimos el modelo.
    Nos conectamos a la base de datos. 
    Creamos la colección, que tendra la estructura que definimos en el modelo.
    Y para cerrar usamos el metodo create. 

Iteration 2. 
Creamos el homepage, para ello usamos el archivo index.hbs. 

Iteration 3. 
Creamos la ruta 'movies' 
    Requerimos express, 
    Usamos el metodo 'express.Router
    Requerimos handlebars 
    Requerimos el path. 
    Requerimos el modelo
    Queremos renderizar el archivo movies.hbs, para ello utilizamos el metodo 'router.get', en donde se establece la ruta, luego dentro del .then, se establece el console.log y el archivo que renderizaremos, lo hacemos con res.render.
    Para dezplazar cada pelicula, utilizamos los partials, creamos una carpeta 'partials' dentro de views, en ella almacenamos el movieCard.hbs que contiene el nombre de la pelicula, la foto y el link see more. El partial esta almacenado en la carpeta movie.hbs
    Para usar un partial debemos escribir en app.js "hbs.registerPartials(path.join(__dirname, 'views', 'nombre de archivo'))"

Iteration 4. 
El objetivo es mostrar los detalles de cada película en una pagina individual, para ello creamos el archivo movie-details.hbs en la carpeta views, ahi almacenaremos todo lo que nos mostrará cuando entremos.
En la carpeta de rutas, dentro del archivo movies.js, tenemos el metodo router.get y como queremos entrar a cada pelicula por su id utilizamos el ":id", para buscar por ID usamos el metodo findById(req.params.id) y luego dentro del then mostramos el console.log y renderizamos la pagina con el res.render, en el catch va el error. 