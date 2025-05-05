const bookService = require('../services/bookService');

exports.create = async (req, res) => {
  try {
    const book = await bookService.createBook(req.userId, req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar livro' });
  }
};

exports.list = async (req, res) => {
  try {
    const books = await bookService.getBooks(req.userId);
    res.json(books);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar livros' });
  }
};

exports.getById = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.userId, req.params.id);
    if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(book);
  } catch {
    res.status(500).json({ error: 'Erro ao buscar livro' });
  }
};

exports.update = async (req, res) => {
  try {
    const book = await bookService.updateBook(req.userId, req.params.id, req.body);
    if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(book);
  } catch {
    res.status(500).json({ error: 'Erro ao atualizar livro' });
  }
};

exports.delete = async (req, res) => {
  try {
    const book = await bookService.deleteBook(req.userId, req.params.id);
    if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json({ message: 'Livro removido com sucesso' });
  } catch {
    res.status(500).json({ error: 'Erro ao remover livro' });
  }
};