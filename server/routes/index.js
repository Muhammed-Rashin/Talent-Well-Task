const express = require('express');
const controller = require('../controller/user.controller');
const router = express.Router();

router.get('/', controller.test);

//create new testimonial
router.post('/add-testimonial', controller.addTestimonial);

//get all active testimonials
router.get('/get-testimonials', controller.getTestimonials);

//edit testimonials
router.post('/edit-testimonial', controller.editTestimonial);

//inactive a testimonial
router.post('/delete-testimonial', controller.deleteTestimonial);

module.exports = router;
