const Todo = require('../models/Todo');

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addTodo = async (req, res) => {
  const { title, completed } = req.body;
  try {
    const newTodo = new Todo({
      title,
      completed,
      user: req.user.id,
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(400).json({ message: 'Bad request' });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: 'Bad request' });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Bad request' });
  }
};
