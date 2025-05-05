const Book = require('../models/book');
const mongoose = require('mongoose');

async function ensureCollectionExists(collectionName) {
  const collections = await mongoose.connection.db.listCollections().toArray();
  const exists = collections.some(c => c.name === collectionName);
  if (!exists) {
    await mongoose.connection.createCollection(collectionName);
    console.log(`Coleção '${collectionName}' criada.`);
  } else {
    console.log(`Coleção '${collectionName}' já existe.`);
  }
}

exports.createBook = async (userId, data) => {
  await ensureCollectionExists('books');
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
