const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['article', 'tutorial', 'video', 'other'],
  },
  content: {
    type: String,
  },
  url: {
    type: String,
  },
});

module.exports = mongoose.model('Resource', resourceSchema);
