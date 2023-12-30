const mongoose = require('mongoose')

const deletedSchema = new mongoose.Schema({
    message: { type: mongoose.Schema.Types.Mixed, required: true },
    reviewed: { type: Boolean, default: false },
})

const Deleted = mongoose.model('Deleted', deletedSchema)

module.exports = Deleted
