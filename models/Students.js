const mongoose = require('mongoose')

const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const Students = mongoose.model('Student', studentsSchema)

module.exports = Students
