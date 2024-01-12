const { Schema, model } = require('mongoose')

const courseSchema = new Schema({
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
        required: false
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    student: [{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }]
})

const Course = model('Course', courseSchema)

module.exports = Course
