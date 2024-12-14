const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const authenticateUser  = require('../middleware/authMiddleware');

router.get('/', authenticateUser, todoController.getTodos);
router.post('/assign', authenticateUser, todoController.addTodo);
router.put('/:id', authenticateUser, todoController.updateTodo);
router.delete('/:id', authenticateUser, todoController.deleteTodo);

module.exports = router;    