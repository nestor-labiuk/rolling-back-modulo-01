const express = require('express')
const app = express()
const coursesRouter = require('./routes/courses.routes') 
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json())

// * Ejemplo de request con queris
// app.get('/api/back?', (req, res) => {
//     const { name } = req.query
//     console.log(name)
//     if(name !== undefined){
//         return res.json({messge : `Hola ${name}`})
//     } 
//     return res.json({messge : 'hola'})
// })

app.use('/api/courses', coursesRouter)

mongoose.connect(process.env.MONGO_CONNECTIONS)
    .then(() => console.log('Connect'))
    .catch(() => console.log('Not connect'))

app.listen(3000, () => console.log('Server listening on port', 3000))
