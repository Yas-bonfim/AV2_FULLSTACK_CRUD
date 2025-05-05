const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

// Rotas
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const bookRoutes = require('./routes/bookRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/protected', protectedRoutes);

// Middleware de erro
app.use(errorMiddleware);

// Conexão com o MongoDB (versão melhorada)
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('🟢 Conectado ao MongoDB');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err.message);
    process.exit(1);
  }
};

connectDB();

// Inicia o servidor localmente (com verificação para Vercel)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
}

// Exporta o app para uso na Vercel
module.exports = app;