const { body } = require('express-validator')
const { requestValidation } = require('./common.middlewares')

const validateCreateCourse = [
    // body('name', 'Name is required').notEmpty(),
    body('name', 'Name must be a string').isString(),
    body('price', 'Price is required').notEmpty(),
    body('price', 'Price must be a number').isNumeric(),
    body('description', 'Description is required').notEmpty(),
    body('description', 'Description must be a string').isString(),
    requestValidation
]

const validateUpdateCourse = [
    body('name', 'Name must be a string').isString().optional(),
    body('price', 'Price must be a number').isNumeric().optional(),
    body('description', 'Description must be a string').isString().optional()
]

module.exports = {
    validateCreateCourse,
    validateUpdateCourse
}
