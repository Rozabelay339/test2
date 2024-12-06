const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const { authenticateUser } = require('../middleware/auth');

router.get('/todos', authenticateUser, todoController.getTodos);
router.post('/todos', authenticateUser, todoController.addTodo);
router.put('/todos/:id', authenticateUser, todoController.updateTodo);
router.delete('/todos/:id', authenticateUser, todoController.deleteTodo);

module.exports = router;
