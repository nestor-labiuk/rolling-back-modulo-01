const { Transport } = require('winston')
const Incident = require('../../models/Incident')

class DbIncidentTransport extends Transport {
    constructor(opts) {
        super(opts)
    }
    log(info, callback) {
        if (info.level === 'error') {
            // console.log('****', info.message)
            setImmediate(async() => {
                const incident = new Incident({
                    message: {
                        date: info.timestamp,
                        error: info.message
                    },
                })
                await incident.save()
                callback()
            })
        }
    }
}

module.exports = DbIncidentTransport
