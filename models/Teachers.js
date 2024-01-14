const { Schema, model } = require('mongoose')

const teachersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }
})

const Teacher = model('Teacher', teachersSchema)

module.exports = Teacher
