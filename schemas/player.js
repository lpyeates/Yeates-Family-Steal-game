const mongoose = require('mongoose');

const { Schema } = mongoose;

const player = new Schema({
  name: {
    type: String,
    required: true,
  },
  currentGift: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Player', player);
