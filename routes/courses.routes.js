const router = require('express').Router()
const { body, validationResult } = require('express-validator')
const { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse } = require('../controllers/courses.controllers')

router.get('/', getAllCourses)
router.get('/:id', getCourseById)
router.post('/',
    body('name', 'Name is required').notEmpty(),
    body('price', 'Price is required').notEmpty(),
    body('price', 'Price must be a number').isNumeric(),
    // body('description', 'Description is required').notEmpty(),
    (req, res, next) => {
        const result = validationResult(req)
        if (!result.isEmpty()) { return res.json({ errors: result.array() }) }
        next()
    },
    createCourse,
    (err, req, res, next) => {
        console.log('Error Capturado', err)
        res.status(500)
        res.json({ message: 'Internal server error ' })
    })
router.patch('/:id', updateCourse)
router.delete('/:id', deleteCourse)

module.exports = router
