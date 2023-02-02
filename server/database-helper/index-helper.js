const testimonialModel = require('../models/testimonial-model');

module.exports = {
  addTestimonial: async (data) => {
    try {
      const testimonialSchema = new testimonialModel(data);
      return await testimonialSchema.save();
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  getTestimonials: async () => {
    try {
      return await testimonialModel.find({ active: true });
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  editTestimonial: async (editData) => {
    try {
      return await testimonialModel.updateOne(
        { _id: editData.id },
        ({ name, post, description } = editData),
      );
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  deleteTestimonial: async (id) => {
    try {
      return await testimonialModel.updateOne({ _id: id }, { active: false });
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
