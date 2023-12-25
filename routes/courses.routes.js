const router = require('express').Router()
const { body } = require('express-validator')
const { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse } = require('../controllers/courses.controllers')
const { requestValidation, errorCatcher } = require('../middlewares/common.middlewares')

router.get('/', getAllCourses)
router.get('/:id', getCourseById)
router.post('/',
    body('name', 'Name is required').notEmpty(),
    body('price', 'Price is required').notEmpty(),
    body('price', 'Price must be a number').isNumeric(),
    body('description', 'Description is required').notEmpty(),
    requestValidation,
    createCourse,
    errorCatcher
)
router.patch('/:id', updateCourse)
router.delete('/:id', deleteCourse)

module.exports = router
