var mongoose = require('mongoose')
var postSchema = mongoose.Schema({
    creator: String,
    content: String,
    imageLink: String,
    jobList: Array
})
var Post = mongoose.model('Post', postSchema)

module.exports = Post;