const { removedEntitiesLogger, logger } = require('../loggers')
const Course = require('../models/Course')

const getAllCourses = async(req, res, next) => {
    try {
        const courses = await Course.find({})
        if (courses.length === 0) {
            logger.warn('Courses list is empty')
            return res.json({ message: 'Courses list empty' })
        }
        logger.info({ message: 'List of courses' })
        res.json({ message: 'List of courses' })
    
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
            logger.warn('Course not found')
            return res.json({ message: 'Course not found' })
        }
        logger.info({ message: 'You got a course by id', course })
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
        logger.info({ message: 'Create course', course })
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
            logger.warn('Course not found')
            return res.json({ message: 'Course not found' })
        }
        currentCourse.name = name || currentCourse.name
        currentCourse.price = price || currentCourse.price
        currentCourse.description = description || currentCourse.description
        const course = await currentCourse.save()
        logger.info({ message: 'Course update', course })
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
            logger.warn('Course not found')
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
