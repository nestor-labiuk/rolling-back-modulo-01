const Teacher = require('../models/Teachers')

const getTeacher = async(req, res, next) => {
    try {
        const teachers = await Teacher.find({})
        res.json(teachers)
    } catch (error) {
        next(error)
    }
}

const getTeacherById = async(req, res, next) => {
    try {
        const { id } = req.params
        const teacher = await Teacher.findById(id)
        res.json(teacher)
    } catch (error) {
        next(error)
    }
}

const getTeacherByIdAndCourse = async(req, res, next) => {
    try {
        const { id } = req.params
        const teacher = await Teacher.findById(id).populate('course', { name: 1, _id: 0 })
        res.json(teacher)
    } catch (error) {
        next(error)
    }
}

const createTeacher = async (req, res, next) => {
    try {
        const { name, lastName, email, course } = req.body
        const teacher = new Teacher({ name, lastName, email, course })
        await teacher.save()
        res.json(teacher)
    } catch (error) {
        next(error)
    }
}

const deleteTeacher = async (req, res, next) => {
    try {
        const { id } = req.params
        const teacher = await Teacher.findByIdAndDelete(id)
        res.json({ deletedTeacher: teacher })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getTeacher,
    createTeacher,
    getTeacherById,
    deleteTeacher,
    getTeacherByIdAndCourse
}
