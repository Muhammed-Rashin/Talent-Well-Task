const mongoose = require('mongoose');

try {
  mongoose.connect(
    process.env.DATABASE_URL,
    () => {
      console.log('Connected to MongoDB');
    },
    (err) => {
      console.log(err);
    },
  );
} catch (error) {
  console.log(error);
}