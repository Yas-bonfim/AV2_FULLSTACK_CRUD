const bookService = require('../services/bookService');
const mongoose = require('mongoose');

// Cria um novo livro
exports.create = async (req, res) => {
  const { userId, body } = req;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(401).json({ error: 'Usuário não autenticado' });
  }

  try {
    const book = await bookService.createBook(userId, body);
    res.status(201).json(book);
  } catch (err) {
    console.error('[ERRO AO CRIAR LIVRO]', err);
    res.status(500).json({ error: 'Erro ao criar livro' });
  }
};

// Lista todos os livros do usuário
exports.list = async (req, res) => {
  const { userId } = req;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(401).json({ error: 'Usuário não autenticado' });
  }

  try {
    const books = await bookService.getBooks(userId);
    res.json(books);
  } catch (err) {
    console.error('[ERRO AO BUSCAR LIVROS]', err);
    res.status(500).json({ error: 'Erro ao buscar livros' });
  }
};

// Busca um livro específico por ID
exports.getById = async (req, res) => {
  const { userId, params } = req;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(401).json({ error: 'Usuário não autenticado' });
  }

  try {
    const book = await bookService.getBookById(userId, params.id);
    if (!book) {
      return res.status(404).json({ error: 'Livro não encontrado ou não pertence ao usuário' });
    }
    res.json(book);
  } catch (err) {
    console.error('[ERRO AO BUSCAR LIVRO POR ID]', err);
    res.status(500).json({ error: 'Erro ao buscar livro' });
  }
};

// Atualiza um livro existente
exports.update = async (req, res) => {
  const { userId, params, body } = req;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(401).json({ error: 'Usuário não autenticado' });
  }

  try {
    const updatedBook = await bookService.updateBook(userId, params.id, body);
    if (!updatedBook) {
      return res.status(404).json({ error: 'Livro não encontrado ou não pertence ao usuário' });
    }
    res.json(updatedBook);
  } catch (err) {
    console.error('[ERRO AO ATUALIZAR LIVRO]', err);
    res.status(500).json({ error: 'Erro ao atualizar livro' });
  }
};

// Remove um livro
exports.delete = async (req, res) => {
  const { userId, params } = req;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(401).json({ error: 'Usuário não autenticado' });
  }

  try {
    const deletedBook = await bookService.deleteBook(userId, params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Livro não encontrado ou não pertence ao usuário' });
    }
    res.json({ message: 'Livro removido com sucesso' });
  } catch (err) {
    console.error('[ERRO AO REMOVER LIVRO]', err);
    res.status(500).json({ error: 'Erro ao remover livro' });
  }
};
