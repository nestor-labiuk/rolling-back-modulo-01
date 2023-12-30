const mongoose = require('mongoose')

const incidentSchema = new mongoose.Schema({
    message: { type: mongoose.Schema.Types.Mixed, required: true },
    reviewed: { type: Boolean, default: false },
})

const Incident = mongoose.model('Incident', incidentSchema)

module.exports = Incident
