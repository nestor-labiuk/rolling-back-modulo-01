const { createLogger, format, transports } = require('winston')
const DbIncidentTransport = require('./transport/DbIncidentTransport')
const DbDeletedTransport = require('./transport/DbDeletedTransport')

const logger = createLogger({
    level: 'info',
    format: 
    format.combine(
        format.json(),
        format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
        format.prettyPrint()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'warns.log', level: 'warn' }),
        new transports.File({ filename: 'general.log' }),
        new DbIncidentTransport({ level: 'error' }),
        new transports.Console({
            format:
            format.combine(
                format.colorize(),
                format.cli()
            ),
        })
    ]
})

const removedEntitiesLogger = createLogger({
    level: 'info',
    format: 
    format.combine(
        format.json(),
        format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
        format.prettyPrint()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new transports.File({ filename: 'removedEntities.log', }),
        new transports.File({ filename: 'general.log', }),
        new DbDeletedTransport({ level: 'info' }),
        new transports.Console({
            format:
            format.combine(
                format.colorize(),
                format.cli(),
            ),
        })
    ]
})

module.exports = {
    logger,
    removedEntitiesLogger
}
