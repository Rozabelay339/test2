const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/todos', todoRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server running on port ${process.env.PORT || 5000}`);
        });
    })
    .catch(err => console.error('MongoDB connection error:', err));
