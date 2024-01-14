const { body } = require('express-validator')
const { requestValidation } = require('./common.middlewares')

const validateCreateTeacher = [
    body('name', 'Name is required').notEmpty(),
    body('name', 'Name must be a string').isString(),
    body('lastName', 'lastName is required').notEmpty(),
    body('lastName', 'lastName must be a string').isString(),
    body('email', 'email is required').isEmail(),
    // body('email', 'email must be a string').isString(),
    // body('course').optional(),
    requestValidation
]

const validateUpdateTeacher = [
    body('name', 'Name must be a string').isString().optional(),
    body('lastName', 'lastName must be a string').isString().optional(),
    body('course').optional(),
]

module.exports = {
    validateCreateTeacher,
    validateUpdateTeacher
}
