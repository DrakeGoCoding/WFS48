var mongoose = require('mongoose')

var classSchema = mongoose.Schema({
    name: String,
    created: {
        type: Date,
        default: Date.now
    }
})

var Class = mongoose.model('Class', classSchema)

module.exports = Class