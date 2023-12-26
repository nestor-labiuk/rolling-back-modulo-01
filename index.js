const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const coursesRouter = require('./routes/courses.routes') 
require('dotenv').config()

const app = express()

app.use(express.json())

app.use(morgan('dev'))

app.use('/api/courses', coursesRouter)

mongoose.connect(process.env.MONGO_CONNECTIONS)
    .then(() => console.log('Connect'))
    .catch(() => console.log('Not connect'))

app.listen(3000, () => console.log('Server listening on port', 3000))
