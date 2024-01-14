const { logger, removedEntitiesLogger } = require('../loggers')
const Teacher = require('../models/Teachers')
const { errorResponse, succesResponse } = require('../utils/resonse.util')

const getTeachers = async(req, res, next) => {
    try {
        const teachers = await Teacher.find({})
        if (teachers.length === 0) {
            logger.warn(errorResponse('Teacher list is empty', [] ))
            return res.json(errorResponse('Teacher list is empty', [])) 
        }
        logger.info(succesResponse('You got the list of teachers', teachers))
        res.json(succesResponse('You got the list of teachers', teachers ))
    } catch (error) {
        next(error)
    }
}

const getTeacherById = async(req, res, next) => {
    try {
        const { id } = req.params
        const teacher = await Teacher.findById(id)
        if (!teacher) {
            res.status(404)
            logger.warn(errorResponse('Teacher not found', []))
            return res.json(errorResponse('Teacher not found', [] ))
        }
        logger.info(succesResponse('You got the teacher by id', teacher))
        res.json(succesResponse('You got the teacher by id', teacher))
    } catch (error) {
        next(error)
    }
}

const getTeacherByIdAndCourse = async(req, res, next) => {
    try {
        const { id } = req.params
        const teacher = await Teacher.findById(id).populate('course', { name: 1 })
        if (!teacher) {
            res.status(404)
            logger.warn(errorResponse('Teacher not found', []))
            return res.json(errorResponse('Teacher not found', [] ))
        }
        logger.info(succesResponse('You got the teacher and course by id', teacher))
        res.json(succesResponse('You got the teacher and course by id', teacher))
    } catch (error) {
        next(error)
    }
}

const createTeacher = async (req, res, next) => {
    try {
        const { name, lastName, email, course } = req.body
        const teacher = new Teacher({ name, lastName, email, course })
        await teacher.save()
        logger.info(succesResponse('Teacher saved successfully', teacher))
        res.json(succesResponse('Teacher saved successfully', teacher))
    } catch (error) {
        next(error)
    }
}

const updateTeacher = async (req, res, next) => {
    try {
        const { id } = req.params
        const { name, lastName, email, course } = req.body
        const currentTeacher = await Teacher.findById(id)
        if (!currentTeacher) {
            res.status(400)
            logger.warn(errorResponse('Teacher not found', [] ))
            return res.json(errorResponse('Teacher not found', [] ))
        }
        currentTeacher.name = name || currentTeacher.name
        currentTeacher.lastName = lastName || currentTeacher.lastName
        currentTeacher.email = email || currentTeacher.email
        currentTeacher.course = course || currentTeacher.course
        const teacher = await currentTeacher.save()
        logger.info(succesResponse('Teacher update successfully', teacher))
        res.json(succesResponse('Teacher update successfully', teacher))
    } catch (error) {
        next(error)
    }
}

const deleteTeacher = async (req, res, next) => {
    try {
        const { id } = req.params
        const teacher = await Teacher.findByIdAndDelete(id)
        if (!teacher) {
            res.status(404)
            logger.warn(errorResponse('Teacher not found', [] ))
            return res.json(errorResponse('Teacher not found', [] ))
        }
        removedEntitiesLogger.info(succesResponse('Deleted teacher', teacher))
        res.json(succesResponse('Deleted teacher', teacher))
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getTeachers,
    getTeacherById,
    getTeacherByIdAndCourse,
    createTeacher,
    updateTeacher,
    deleteTeacher
}
