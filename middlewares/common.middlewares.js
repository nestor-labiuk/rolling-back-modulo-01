const { param, validationResult } = require('express-validator')
const { logger } = require('../loggers')

const requestValidation = (req, res, next) => {
    const result = validationResult(req)
    if (!result.isEmpty()) { return res.status(400).json({ errors: result.array() }) }
    next()
}

const errorCatcher = (err, req, res, next) => {
    logger.error('Error Capturado', err)
    res.status(500)
    res.json({ message: 'Internal server error ' })
    next()
}

const validationMongoId = [
    param('id', 'id is not a Mongo ID').isMongoId(),
    requestValidation
]

module.exports = {
    errorCatcher,
    requestValidation,
    validationMongoId,
}
