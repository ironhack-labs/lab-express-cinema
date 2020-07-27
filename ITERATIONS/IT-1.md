--Rellena la database

1. Creo la carpeta models
   1.1. Creo el archivo Movie.model.js
   1.2. Creo un Schema para las movies.
   1.3. Lo guardo en una variable
   1.4. Exporto el modulo

2. Creo el archivo seeds.js en bin para meter las movies
   2.1. Como en configs/db.config.js ya está la conexión a la DB, en el seeds.js requiero ese archivo js.
   2.2. Requiero el modelo.
   2.3. Añado las movies.
   2.4. Invoco el método create pasando el listado de movies sobre el modelo Movie.
