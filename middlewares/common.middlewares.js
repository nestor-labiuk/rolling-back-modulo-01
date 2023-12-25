const { validationResult } = require('express-validator')

const requestValidation = (req, res, next) => {
    const result = validationResult(req)
    if (!result.isEmpty()) { return res.json({ errors: result.array() }) }
    next()
}

const errorCatcher = (err, req, res, next) => {
    console.log('Error Capturado', err)
    res.status(500)
    res.json({ message: 'Internal server error ' })
    next()
}

module.exports = {
    errorCatcher,
    requestValidation
}
