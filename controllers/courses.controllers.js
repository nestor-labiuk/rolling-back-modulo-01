const { removedEntitiesLogger, logger } = require('../loggers')
const Course = require('../models/Course')
const { succesResponse, errorResponse } = require('../utils/resonse.util')

const getAllCourses = async(req, res, next) => {
    try {
        const courses = await Course.find({})
        if (courses.length === 0) {
            logger.warn(errorResponse('Courses list is empty', [] ))
            return res.json(errorResponse('Courses list is empty', [] ))
        }
        logger.info(succesResponse('You got the list of courses'))
        res.json(succesResponse('You got the list of courses', courses))
    } catch (err) {
        next(err)
    }
}

const getCourseById = async (req, res, next) => {
    try {
        const { id } = req.params
        const course = await Course.findById(id).populate('teacher')
        if (!course) {
            res.status(404) 
            logger.warn(errorResponse('Course not found', [] ))
            return res.json(errorResponse('Course not found', [] ))
        }
        logger.info(succesResponse('You got a course by id', course ))
        res.json(succesResponse('You got a course by id', course ))
    } catch (err) {
        res.json(errorResponse( err))
        next(err)
    }
}

const createCourse = async (req, res, next) => {
    try {
        const { name, price, description, teacher, student } = req.body
        const course = new Course({ name, price, description, teacher, student })
        await course.save()
        logger.info(succesResponse ('Created course', course))
        res.status(201).json(succesResponse ('Created course', course))
    } catch (err) {
        next(err)
    }
}

const updateCourse = async (req, res, next) => {
    try { 
        const { id } = req.params
        const { name, price, description } = req.body
        const currentCourse = await Course.findById(id)
        if (!currentCourse) {
            res.status(400)
            logger.warn(errorResponse('Course not found', []))
            return res.json(errorResponse('Course not found', []))
        }
        currentCourse.name = name || currentCourse.name
        currentCourse.price = price || currentCourse.price
        currentCourse.description = description || currentCourse.description
        const course = await currentCourse.save()
        logger.info(succesResponse('Course update', course ))
        res.json(succesResponse('Course update', course ))
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
            logger.warn(errorResponse('Course not found', []))
            return res.json(errorResponse('Course not found', []))
        }
        removedEntitiesLogger.info(succesResponse('Deleted course', course))
        res.json(succesResponse('Deleted course', course))
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
