const express = require('express');
const router = express.Router({ mergeParams: true });
const {
    createCourses,
    getCourses,
    getCourse,
    updateCourse,
    deleteCourse
} = require('../controllers/courses');

router
    .route('/')
    .post(createCourses)
    .get(getCourses);

router
    .route('/:id')
    .get(getCourse)
    .put(updateCourse)
    .delete(deleteCourse);

module.exports = router;
