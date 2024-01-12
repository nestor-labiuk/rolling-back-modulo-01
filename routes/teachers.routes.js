const router = require('express').Router()
const { getTeacher, createTeacher, deleteTeacher, getTeacherById, getTeacherByIdAndCourse } = require('../controllers/teachers.controllers')

router.get('/', getTeacher)
router.get('/:id', getTeacherById)
router.get('/populate/:id', getTeacherByIdAndCourse)
router.post('/', createTeacher)
// router.patch('/:id',)
router.delete('/:id', deleteTeacher)
   
module.exports = router
