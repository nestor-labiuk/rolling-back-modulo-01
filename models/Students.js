const { Schema, model } = require('mongoose')

const studentsSchema = new Schema({
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
        required: false
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: false
    }
})

const Students = model('Student', studentsSchema)

module.exports = Students
