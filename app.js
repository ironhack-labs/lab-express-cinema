require('dotenv/config')

require('./db')

const express = require('express')

const hbs = require('hbs')

const app = express()

require('./config')(app)

app.locals.apptitle = `Ironhack Cinema`

const index = require('./routes/index')
app.use('/', index)

require('./error-handling')(app)

module.exports = app