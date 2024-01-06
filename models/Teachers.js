const mongoose = require('mongoose')

const teachersSchema = new mongoose.Schema({
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

const Teacher = mongoose.model('Teacher', teachersSchema)

module.exports = Teacher
