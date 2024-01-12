const express = require('express')
const morgan = require('morgan')
require('dotenv').config()
const mongoose = require('mongoose')
const coursesRouter = require('./routes/courses.routes')
const teachersRouter = require('./routes/teachers.routes')
const { logger } = require('./loggers')

const app = express()

app.use(express.json())

app.use(morgan('dev'))

app.use('/api/courses', coursesRouter)
app.use('/api/teachers', teachersRouter)

mongoose.connect(process.env.MONGO_CONNECTIONS)
    .then(() => logger.info({ message: 'Connected to data base' })) 
    .catch(() => logger.error({ message: 'Not connect to data base' }))

app.listen(process.env.PORT, () => logger.info({ message: 'Server listening on port ' + process.env.PORT }))
