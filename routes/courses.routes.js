const router = require('express').Router()
const { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse } = require('../controllers/courses.controllers')

router.get('/', getAllCourses)
router.get('/:id', getCourseById)
router.post('/', createCourse)
router.patch('/:id', updateCourse)
router.delete('/:id', deleteCourse)

module.exports = router
