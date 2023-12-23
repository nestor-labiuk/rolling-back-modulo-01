const express = require('express')
const app = express()
const coursesRouter = require('./routes/courses.routes') 
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json())

// - Ejemplo de request con queris-
// app.get('/api/back?', (req, res) => {
//     const { name } = req.query
//     console.log(name)
//     if (name !== undefined) {
//         return res.json({ messge: `Hola ${name}` })
//     } 
//     return res.json({ messge: 'hola' })
// })

app.use('/api/courses', coursesRouter)

// - Ejemplo de midlewares con manejo de errores -
// app.get('/midleware', 
//     (req, res, next) => {
//         console.log('Primer midleware')
//         if (req.query.option === '1' ) return res.json({ message: 'Primer midleware' })
//         else if (req.query.option === 'error1') throw new Error('Lanzamos un error en 1')
        
//         next()
//     }, 
//     (req, res, next) => {
//         console.log('Segundo midleware')
//         if (req.query.option === '2' ) return res.json({ message: 'Segundo midleware' })
//         else if (req.query.option === 'error2') throw new Error('Lanzamos un error en 2')

//         next()
//     },
//     (req, res, ) => res.json ({ message: 'Fin prueba midleware' }),

//     (err, req, res, next) => {
//         console.log(err)  
//         if (err !== undefined) return res.send({ message: 'Hubo un error' })

//         next()
//     }
// )

mongoose.connect(process.env.MONGO_CONNECTIONS)
    .then(() => console.log('Connect'))
    .catch(() => console.log('Not connect'))

app.listen(3000, () => console.log('Server listening on port', 3000))
