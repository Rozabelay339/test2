const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, default: false },
}, { timestamps: true }); // Automatically add createdAt and updatedAt

module.exports = mongoose.model('Todo', todoSchema);
