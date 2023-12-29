const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const mongoose = require('mongoose')
const coursesRouter = require('./routes/courses.routes')
const { logger } = require('./loggers')

const app = express()

app.use(express.json())

app.use(morgan('dev'))

app.use('/api/courses', coursesRouter)

mongoose.connect(process.env.MONGO_CONNECTIONS)
    .then(() => logger.info('Connected to mongodb')) 
    .catch(() => logger.error('Not connect'))

app.listen(3000, () => logger.info('Server listening on port', 3000))
