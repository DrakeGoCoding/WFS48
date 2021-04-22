var mongoose = require('mongoose')

var schoolSchema = mongoose.Schema({
    name: String,
    address: String,
    created: {
        type: Date,
        default: Date.now
    }
})

var School = mongoose.model('School', schoolSchema)

module.exports = School