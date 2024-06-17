const mongoose = require('mongoose');

const watchSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  features: {
    type: Array,
  },
  illustrations: {
    type: Array, 
  },
});

module.exports = mongoose.model('Watch', watchSchema);
