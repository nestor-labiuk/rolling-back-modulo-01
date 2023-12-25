const Course = require('../model/Course')

const getAllCourses = async(req, res, next) => {
    try {
        const courses = await Course.find({})
        if (courses.length !== 0) {
            return res.json({ message: 'List of courses', courses })
        }res.json({ message: 'List empty' })
    } catch (err) {
        next(err)
    }
}

const getCourseById = async (req, res, next) => {
    try {
        const { id } = req.params
        const course = await Course.findById(id)
        if (!course) {
            res.status(404) 
            return res.json({ message: 'Course not found' })
        }
        res.json({ message: 'You got a course by id', course })
    } catch (err) {
        next(err)
    }
}

const createCourse = async (req, res, next) => {
    try {
        const { name, price, description } = req.body
        const course = new Course({ name, price, description })
        await course.save()
        res.json({ message: 'Create course', course })
    } catch (err) {
        next(err)
    }
}

const updateCourse = async (req, res, next) => {
    try { const { id } = req.params
        const { name, price, description } = req.body
        const course = await Course.findByIdAndUpdate({ _id: id }, { name: name, price: price, description: description }, { new: true })
        if (!course) {
            res.status(404)
            return res.json({ message: 'Course not found' })
        }
        res.json({ message: 'Course update', course })
    } catch (err) {
        next(err)
    }
}

const deleteCourse = async (req, res, next) => {
    try {
        const { id } = req.params
        const course = await Course.findByIdAndDelete(id)
        if (!course) {
            res.status(404)
            return res.json({ message: 'Course not found' })
        }
        res.json({ message: 'Deleted course', course })
    } catch (err) {
        next(err)
    }
}
 
module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
}
