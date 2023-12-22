const mongoose = require('mongoose')

const courseScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Course = mongoose.model('Course', courseScheme)

module.exports = Course
