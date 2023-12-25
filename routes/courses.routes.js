const router = require('express').Router()
const { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse } = require('../controllers/courses.controllers')
const { errorCatcher } = require('../middlewares/common.middlewares')
const { validateCreateCourse } = require('../middlewares/course.middleware')

router.get('/', getAllCourses)
router.get('/:id', getCourseById)
router.post('/',
    validateCreateCourse,
    createCourse,
    errorCatcher
)
router.patch('/:id', updateCourse)
router.delete('/:id', deleteCourse)

module.exports = router
