const router = require('express').Router()
const { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse } = require('../controllers/courses.controllers')
const { errorCatcher, validationMongoId } = require('../middlewares/common.middlewares')
const { validateCreateCourse } = require('../middlewares/course.middleware')

router.get('/',
    getAllCourses,
    errorCatcher
)

router.get('/:id',
    validationMongoId,
    getCourseById
)

router.post('/',
    validateCreateCourse,
    createCourse,
    errorCatcher
)

router.patch('/:id',
    validationMongoId,
    validateCreateCourse,
    updateCourse,
    errorCatcher
)

router.delete('/:id',
    validationMongoId,
    deleteCourse,
    errorCatcher
)

module.exports = router
