const { param, validationResult } = require('express-validator')
const { logger } = require('../loggers')
const { errorResponse } = require('../utils/resonse.util')

const requestValidation = (req, res, next) => {
    const result = validationResult(req)
    if (!result.isEmpty()) {
        logger.warn({ message: 'the request is wrong', data: result.array() })
        return res.status(400).json(errorResponse('Caught error', result.array()))
    }
    next()
}

const errorCatcher = (err, req, res, next) => {
    logger.error('Error Capturado', err)
    res.status(500)
    res.json(errorResponse('Internal server error ', []))
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
