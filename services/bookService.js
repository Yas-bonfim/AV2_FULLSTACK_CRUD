const Book = require('../models/book');

exports.createBook = async (userId, data) => {
  return await Book.create({ ...data, userId });
};

exports.getBooks = async (userId) => {
  return await Book.find({ userId });
};

exports.getBookById = async (userId, id) => {
  return await Book.findOne({ _id: id, userId });
};

exports.updateBook = async (userId, id, data) => {
  return await Book.findOneAndUpdate({ _id: id, userId }, data, { new: true });
};

exports.deleteBook = async (userId, id) => {
  return await Book.findOneAndDelete({ _id: id, userId });
};
