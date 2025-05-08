const bookService = require('../services/bookService');
const mongoose = require ('mongoose')

// Cria um novo livro
exports.create = async (req, res) => {
  try {
    const { userId, body } = req;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      console.log(userId)
      return res.status(400).json({ error: 'Usuário não autenticado' });
    }

    const book = await bookService.createBook(userId, body);
    res.status(201).json(book);
  } catch (err) {
    console.error('[ERRO AO CRIAR LIVRO]', err);
    res.status(500).json({ error: err.message || 'Erro ao criar livro' });
  }
};

// Lista todos os livros do usuário
exports.list = async (req, res) => {
  try {
    const books = await bookService.getBooks(req.userId);
    res.json(books);
  } catch (err) {
    console.error('[ERRO AO BUSCAR LIVROS]', err);
    res.status(500).json({ error: err.message || 'Erro ao buscar livros' });
  }
};

// Busca um livro específico por ID
exports.getById = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.userId, req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Livro não encontrado' });
    }
    res.json(book);
  } catch (err) {
    console.error('[ERRO AO BUSCAR LIVRO POR ID]', err);
    res.status(500).json({ error: err.message || 'Erro ao buscar livro' });
  }
};

// Atualiza um livro existente
exports.update = async (req, res) => {
  try {
    const updatedBook = await bookService.updateBook(req.userId, req.params.id, req.body);
    if (!updatedBook) {
      return res.status(404).json({ error: 'Livro não encontrado' });
    }
    res.json(updatedBook);
  } catch (err) {
    console.error('[ERRO AO ATUALIZAR LIVRO]', err);
    res.status(500).json({ error: err.message || 'Erro ao atualizar livro' });
  }
};

// Remove um livro
exports.delete = async (req, res) => {
  try {
    const deletedBook = await bookService.deleteBook(req.userId, req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Livro não encontrado' });
    }
    res.json({ message: 'Livro removido com sucesso' });
  } catch (err) {
    console.error('[ERRO AO REMOVER LIVRO]', err);
    res.status(500).json({ error: err.message || 'Erro ao remover livro' });
  }
};
