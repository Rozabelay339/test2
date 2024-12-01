const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // Hash password
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully.' });
    } catch (err) {
        res.status(500).json({ error: 'Registration failed.' });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ error: 'User not found.' });

        const isMatch = await bcrypt.compare(password, user.password); // Compare passwords
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials.' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Login failed.' });
    }
};

module.exports = { register, login };
