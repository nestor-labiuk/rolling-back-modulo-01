const { createLogger, format, transports } = require('winston')

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.json(),
        format.timestamp({
            format: 'DD-MM-YYYY HH:mm:ss' 
        }),
        format.prettyPrint()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new transports.File({ filename: 'error.log', level: 'error' }),
        
        new transports.File({ filename: 'general.log' }),
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.cli()
            ),
        })

    ]
})

const removedEntitiesLogger = createLogger({
    level: 'info',
    format: format.combine(
        format.json(),
        format.timestamp({
            format: 'DD-MM-YYYY HH:mm:ss' 
        }),
        format.prettyPrint()
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new transports.File({ filename: 'removedEntities.log', }),
        new transports.File({ filename: 'general.log', }),
        new transports.Console({
            format: format.combine(
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
