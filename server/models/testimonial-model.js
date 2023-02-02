const mongoose = require('mongoose');

const testimonialModel = new mongoose.Schema(
  {
    photo: String,
    name: String,
    post: String,
    description: String,
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('testimonial', testimonialModel);
