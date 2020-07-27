--Info específica de la movie seleccionada por ID (req.params)

1. Añado un a tag con el link "/movies/{{this.id}}" en "movies.hbs" para que coja el parármetro de la iteración pertinente.
   1.2. Creo el hbs "show" donde se mostrarán la info específica de la movie.
   1.3. Index.js Creo un router.get "/movies/:id" para recoger los parámetros de "/movies/{{this.id}}
   1.4. Renderizo dicha información de la DB en el hbs "show"
   1.5. Para iterar sobre un array de Strings --> linea 11 y 12 de shows.hbs
