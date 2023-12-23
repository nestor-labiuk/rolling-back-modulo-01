const Course = require('../model/Course')

const getAllCourses = async(req, res) => {
    const courses = await Course.find({})
    
    if (courses.length !== 0) {
        return res.json({ message: 'List of courses', courses })
    }res.json({ message: 'List empty' })
}

const getCourseById = async (req, res) => {
    const { id } = req.params

    const course = await Course.findById(id)
    res.json({ message: 'You got a course by id', course })
}

const createCourse = async (req, res) => {
    try {
        const { name, price, description } = req.body
        const course = new Course({ name, price, description })
        await course.save()
        res.json({ message: 'Create course', course })

    } catch (error) {
        console.log(createCourse, error)
        res.status(500)
        res.json({ message: 'Internal server error ' })
    }
}

const updateCourse = async (req, res) => {
    const { id } = req.params
    const { name, price, description } = req.body
    const course = await Course.findByIdAndUpdate({ _id: id }, { name: name, price: price, description: description }, { new: true })

    res.json({ message: 'Course update', course })
}

const deleteCourse = async (req, res) => {
    const { id } = req.params
    const course = await Course.findByIdAndDelete(id)

    res.json({ message: 'Deleted course', course })
}
 
module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
}
