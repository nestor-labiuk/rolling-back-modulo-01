const { Transport } = require ('winston')
const Deleted = require('../../models/Deleted')

class DbDeletedTransport extends Transport {
    constructor(opts) {
        super(opts)
    }
    log(info, callback) {
        console.log('***', info.message)
        setImmediate(async() => {
            const deleted = new Deleted({
                message: {
                    date: info.timestamp,
                    course: info.course,
                    message: info.message,
                }
            })  
            await deleted.save()
            callback()
        })
    }
}

module.exports = DbDeletedTransport
