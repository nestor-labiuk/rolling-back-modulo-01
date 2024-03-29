const router = require('express').Router()
const { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse } = require('../controllers/courses.controllers')
const { errorCatcher, validationMongoId } = require('../middlewares/common.middlewares')
const { validateCreateCourse, validateUpdateCourse } = require('../middlewares/course.middleware')

router.get('/',
    getAllCourses,
    errorCatcher
)

router.get('/:id',
    validationMongoId,
    getCourseById,
    errorCatcher
)

router.post('/',
    validateCreateCourse,
    createCourse,
    errorCatcher
)

router.patch('/:id',
    validationMongoId,
    validateUpdateCourse,
    updateCourse,
    errorCatcher
)

router.delete('/:id',
    validationMongoId,
    deleteCourse,
    errorCatcher
)

module.exports = router
