const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware); // protege todas as rotas abaixo

router.post('/', bookController.create);
router.get('/', bookController.list);
router.get('/:id', bookController.getById);
router.put('/:id', bookController.update); // atualiza totalmente
router.patch('/:id', bookController.update); // atualiza parcialmente
router.delete('/:id', bookController.delete);

module.exports = router;
