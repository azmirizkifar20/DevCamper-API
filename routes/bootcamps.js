const express = require('express');
const router = express.Router();
const {
    getBootcamps,
    getBootcampsByCondition,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
    getBootcampsInRadius
} = require('../controllers/bootcamps');

router.route('/condition').get(getBootcampsByCondition);

router
    .route('/')
    .get(getBootcamps)
    .post(createBootcamp);

router
    .route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

module.exports = router;
