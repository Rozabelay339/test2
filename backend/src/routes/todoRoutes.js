// src/routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const authMiddleware = require('../middleware/authMiddleware'); // Correct path to the middleware

// Example route that requires authentication
router.get('/todos', authMiddleware, todoController.getTodos);
router.post('/todos', authMiddleware, todoController.createTodo);
router.put('/todos/:id', authMiddleware, todoController.updateTodo);
router.delete('/todos/:id', authMiddleware, todoController.deleteTodo);

module.exports = router;
