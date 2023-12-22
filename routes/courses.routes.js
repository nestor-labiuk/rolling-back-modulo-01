const Course = require('../model/Course')

const router = require('express').Router()

router.get('/', async(req, res) => {
    const courses = await Course.find({})
    if (courses.length !== 0) {
        return res.json({ message: 'List of courses', courses })
    }res.json({ message: 'List empty' })
})
router.get('/:id', (req, res) => {
    res.json({ message: 'Get course by id' })
})
router.post('/', (req, res) => {
    res.json({ message: 'Create course' })
})

module.exports = router
