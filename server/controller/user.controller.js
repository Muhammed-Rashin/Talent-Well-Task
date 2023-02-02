const cloudinary = require('../config/cloudinary.config');
const databaseHelper = require('../database-helper/index-helper');

module.exports = {
  test: (req, res) => {
    res.send('Server Is Running');
  },
  addTestimonial: async (req, res) => {
    try {
      cloudinary(req.body.image)
        .then(async (url) => {
          console.log(url);
          const testimonialData = {
            ...req.body,
            photo: url,
          };
          await databaseHelper.addTestimonial(testimonialData);
          res.send('Success');
        })
        .catch((err) => res.status(509).send(err));
    } catch (error) {
      console.log(error);
    }
  },

  getTestimonials: async (req, res) => {
    try {
      const testimonials = await databaseHelper.getTestimonials();
      res.send(testimonials);
    } catch (error) {
      console.log(error);
    }
  },

  editTestimonial: async (req, res) => {
    try {
      const response = await databaseHelper.editTestimonial(req.body);
      if (response) res.send(true);
      else res.send(false);
    } catch (error) {
      console.log(error);
    }
  },

  deleteTestimonial: async (req, res) => {
    try {
      const response = await databaseHelper.deleteTestimonial(req.body.id);
      if (response) res.send(true);
      else res.send(false);
    } catch (error) {
      console.log(error);
    }
  },
};
