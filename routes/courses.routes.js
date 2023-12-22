const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({ message: 'List of courses' })
})
router.get('/:id', (req, res) => {
    res.json({ message: 'Get course by id' })
})
router.post('/', (req, res) => {
    res.json({ message: 'Create course' })
})

module.exports = router
