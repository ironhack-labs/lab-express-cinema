// 1. IMPORTACIÓN
const mongoose = require("mongoose")


// 2. FUNCIÓN
const connectDB = async () => {

    try {
        await mongoose.connect("mongodb+srv://mauricio:SpSuX2bcKs2H8ffB@cluster0.ykq4a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        return console.log("Base de datos conectada correctamente")
    } catch (error) {
        console.log(error)
        return process.exit(1) //MATA LA INSTANCIA DE NODEJS HACIA ESE CLIENTE
    }

}

// 3. EXPORTACIÓN
module.exports = connectDB