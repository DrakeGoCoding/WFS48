const express = require('express');
const router = express.Router();
const Class = require('./model/class')

router.get('/', (req, res) => {
    return Class.find().exec((err, classes) => {
        if (err) throw err;
        res.json(classes)
    })
})


router.post('/', (req, res) => {
    let newClass = new Class(req.body)
    newClass.save(err => {
        if (err) throw err;
        console.log('Class save successfully');
    })
    res.json({ data: newClass })
})

router.put('/', (req, res) => {
    if (!req.body.id)
        return res.status(400).send({ messError: 'not found id' })

    const id = { _id: req.body.id }
    const update = req.body;

    Class.findByIdAndUpdate(id, update, { new: true }, (err, result) => {
        if (err) return res.send(err)
        res.json(result)
    });
})

router.delete('/:id', (req, res) => {
    if (!req.params.id)
        return res.status(400).send({ messError: 'not found id' })

    const id = { _id: req.params.id }

    Class.findByIdAndDelete(id, (err, doc) => {
        if (err) console.log(err)
        else res.json({ result: `Delete id ${id} successfully` })
    })
})

module.exports = router