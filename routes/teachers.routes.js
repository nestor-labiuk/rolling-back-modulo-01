const router = require('express').Router()
const { getTeachers, createTeacher, deleteTeacher, getTeacherById, getTeacherByIdAndCourse, updateTeacher } = require('../controllers/teachers.controllers')
const { errorCatcher, validationMongoId } = require('../middlewares/common.middlewares')

router.get('/',
    getTeachers,
    errorCatcher    
)

router.get('/:id',
    validationMongoId,
    getTeacherById,
    errorCatcher    

)

router.get('/populate/:id',
    validationMongoId,
    getTeacherByIdAndCourse,
    errorCatcher    
)

router.post('/',
    createTeacher,
    errorCatcher    
)

router.patch('/:id',
    validationMongoId,
    updateTeacher,
    errorCatcher    
)

router.delete('/:id',
    validationMongoId,
    deleteTeacher,
    errorCatcher    
)
   
module.exports = router
