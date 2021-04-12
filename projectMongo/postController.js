const express = require('express')
const router = express.Router()
const Post = require('./model/post')

router.get('/', (req, res) => {
    return Post.find().exec((err, books) => {
        if (err) throw err
        res.json(books)
    })
})

router.post('/', (req, res) => {
    let post = new Post(req.body)
    post.save(err => {
        if (err) throw err
        console.log('Post successfully')
    })
    res.json({ "data": post })
})

router.put('/', async (req, res) => {
    const id = { _id: req.body._id };
    const update = req.body

    await Post.findByIdAndUpdate(id, update, { new: true }, (err, result) => {
        if (err) return res.send(err)
        res.json(result)
    })
})

router.delete('/:id', (req, res) => {
    const id = { _id: req.params.id }
    Post.findByIdAndDelete(id, (err, docs) => {
        if (err) console.log(err);
        else res.json({ message: `Delete post ${req.params.id} successfully` });
    })
})

module.exports = router