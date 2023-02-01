const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/lab-express-cinema'

mongoose.connect(MONGODB_URI)
.then((resp) => {
  console.log(`Server was connected succesfully to the database ${MONGODB_URI}`)
})
.catch((error) => console.log(`An error ocurred when trying to connect to the database ${MONGODB_URI}`))
