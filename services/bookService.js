const mongoose = require('mongoose');
const Book = require('../models/book');

// Verifica se a coleção existe (opcional em dev)
async function ensureCollectionExists(collectionName) {
  const collections = await mongoose.connection.db.listCollections().toArray();
  const exists = collections.some(c => c.name === collectionName);
  if (!exists) {
    await mongoose.connection.createCollection(collectionName);
    console.log(`Coleção '${collectionName}' criada.`);
  }
}

// Cria um novo livro associado ao userId
exports.createBook = async (userId, data) => {
  if (!userId) throw new Error('userId não fornecido');
  await ensureCollectionExists('books');

  const bookData = { ...data, userId };
  console.log('[CREATE BOOK] Dados:', bookData);

  const newBook = new Book(bookData);
  return await newBook.save();
};

// Lista todos os livros do usuário
exports.getBooks = async (userId) => {
  if (!userId) throw new Error('userId não fornecido');
  return await Book.find({ userId });
};

// Busca um livro por ID e userId
exports.getBookById = async (userId, id) => {
  if (!userId || !id) throw new Error('Parâmetros inválidos');
  return await Book.findOne({ _id: id, userId });
};

// Atualiza um livro (se pertencer ao userId)
exports.updateBook = async (userId, id, data) => {
  if (!userId || !id) throw new Error('Parâmetros inválidos');
  return await Book.findOneAndUpdate(
    { _id: id, userId },
    data,
    { new: true, runValidators: true }
  );
};

// Remove um livro (se pertencer ao userId)
exports.deleteBook = async (userId, id) => {
  if (!userId || !id) throw new Error('Parâmetros inválidos');
  return await Book.findOneAndDelete({ _id: id, userId });
};
