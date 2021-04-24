var mongoose = require('mongoose')

var postSchema = mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: String,
    imageLink: String,
    jobList: Array
})

var Post = mongoose.model('Post', postSchema)

module.exports = Post;