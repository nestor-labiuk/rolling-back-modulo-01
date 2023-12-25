const { body } = require('express-validator')
const { requestValidation } = require('./common.middlewares')

const validateCreateCourse = [
    body('name', 'Name is required').notEmpty(),
    body('price', 'Price is required').notEmpty(),
    body('price', 'Price must be a number').isNumeric(),
    body('description', 'Description is required').notEmpty(),
    requestValidation
]

module.exports = {
    validateCreateCourse
}
