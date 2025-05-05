const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/mongo');

dotenv.config();

const app = express();
app.use(express.json());

// Conexão com o MongoDB
connectDB();

// Rotas
app.use('/auth', require('./routes/authRoutes'));
app.use('/books', require('./routes/bookRoutes'));
app.use('/protected', require('./routes/protectedRoutes')); // opcional


const app = require('./app');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Exporta o app para uso pelo Vercel
module.exports = app;
