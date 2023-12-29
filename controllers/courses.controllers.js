const { removedEntitiesLogger } = require('../loggers')
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
        res.status(201).json({ message: 'Create course', course })
    } catch (err) {
        next(err)
    }
}

const updateCourse = async (req, res, next) => {
    try { const { id } = req.params
        const { name, price, description } = req.body
        const currentCourse = await Course.findById(id)
        if (!currentCourse) {
            res.status(400)
            return res.json({ message: 'Course not found' })
        }
        currentCourse.name = name || currentCourse.name
        currentCourse.price = price || currentCourse.price
        currentCourse.description = description || currentCourse.description
        const course = await currentCourse.save()
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
        removedEntitiesLogger.info({ message: 'Course deleted', course })
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
