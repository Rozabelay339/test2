const Todo = require('../models/Todo');

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({}); // Fetch all todos
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch todos.' });
    }
};

const addTodo = async (req, res) => {
    try {
        const newTodo = new Todo(req.body); // Create a new todo
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create todo.' });
    }
};

const updateTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ); // Update todo by ID
        if (!updatedTodo) {
            return res.status(404).json({ error: 'Todo not found.' });
        }
        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update todo.' });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id); // Delete todo by ID
        if (!deletedTodo) {
            return res.status(404).json({ error: 'Todo not found.' });
        }
        res.status(200).json({ message: 'Todo deleted successfully.' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete todo.' });
    }
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
