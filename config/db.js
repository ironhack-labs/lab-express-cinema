const mongoose          = require("mongoose")

const connectingDB      = () => {

    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Conectados a la base de datos")
    })
    .catch((e) => {
        console.log(e)
    })
}

module.exports = connectingDB