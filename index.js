const express = require('express')
const app = express()
const coursesRouter = require('./routes/courses.routes') 
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json())
app.use('/api/courses', coursesRouter)

mongoose.connect(process.env.MONGO_CONNECTIONS)
    .then(() => console.log('Connect'))
    .catch(() => console.log('Not connect'))

app.listen(3000, () => console.log('Server listening on port', 3000))
