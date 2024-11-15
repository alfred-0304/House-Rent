const mongoose = require('mongoose');

const connectionOfDb = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/House', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(`Could not connect to MongoDB: ${err.message}`);
  }
};

module.exports = connectionOfDb;
