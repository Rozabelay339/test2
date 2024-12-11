const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const connectDB = require('./config/db');

const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

dotenv.config();

connectDB();

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5000',
  methods: ['GET', 'POST','PUT','DELETE'], 
  credentials: true, 
};
app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);
 
app.use((req, res) => {
  res.status(404).json({ message: 'Route Not Found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
       