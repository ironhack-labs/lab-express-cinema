// 1. IMPORTACIONES
const express   =      require("express")
const app       =      express()
const hbs       =      require("hbs")     

const connectingDB  =   require('./config/db')


// 2. MIDDLEWARES
// ACTIVAR VARIABLES DE ENTORNO
require('dotenv').config()

// GESTIÓN DE BASE DE DATOS
connectingDB()

// ACTIVACIÓN DE LA CARPETA DE PUBLIC
app.use(express.static(__dirname + "/public"))

// ACTIVAR CARPETA DE VISTAS
app.set("views", __dirname + "/views")

// ACTIVAR HANDLEBARS
app.set("view engine", "hbs")

// ACTIVAR RECEPCIÓN DE DATOS DE FORMULARIOS
app.use(express.urlencoded({ extended: true }))



// 3. RUTEO
app.use("/", require("./routes/movies"))


// 4. SERVIDOR
app.listen(process.env.PORT, () => console.log(`Servidor activo en el puerto ${ process.env.PORT }`))