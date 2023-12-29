const Transport = require('winston')
const Incident = require('../../models/Incident')

class DbIncidentTransport extends Transport {
    constructor(opts) {
        super(opts)
    }

    log(info, callback) {
        if (info === 'error') {
            setImmediate(async() => {
                const incident = new Incident({
                    message: {
                        error: info.message
                    }
                })
                await incident.save()
                callback()
            })
        }
    }
}

module.exports = DbIncidentTransport
