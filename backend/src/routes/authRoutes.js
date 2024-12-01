const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register); // Public: Register
router.post('/login', login);       // Public: Login

module.exports = router;
