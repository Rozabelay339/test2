const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization'); 

  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; 
    console.log('Token verified:', verified);
    next();
  } catch (err) {
    console.error('Invalid token:', err.message);
    res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
