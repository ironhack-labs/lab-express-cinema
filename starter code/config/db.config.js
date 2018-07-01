const   mongoose = require('mongoose');
// const nombre está en mayúsculas porque es algo que hemos designado nosotros
const DB_NAME = "cinemaBBDD";
// Se puede poner loscalhost o la IP, aquí le estamos diciendo dónde está la BBDD
const URI = `mongodb://loscalhost/${DB_NAME}`;

// Ahora nos conectamos a la BBDD

mongoose.connect(URI)
    .then(
        console.info(`Se ha conectado la BBDD ${DB_NAME} a la URI ${URI}`)
    )
    // Ha habido un error, pasa al siguiente USE
    // No hace falta poner llaves en la función porque solo va a ejecutar 1 cosa
    .catch (haHabidoUnError => next(haHabidoUnError));
