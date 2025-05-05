const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  publishedYear: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('book', bookSchema);
