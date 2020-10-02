const mongoose = require('mongoose');

const { Schema } = mongoose;

const gift = new Schema({
  name: {
    type: String,
    required: true,
  },
  showName: {
    type: Boolean,
    required: true,
  },
  giftBringer: {
    type: String,
    required: true,
  },
  giftOwner: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Gift', gift);
