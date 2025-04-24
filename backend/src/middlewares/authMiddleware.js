const jwt = require('jsonwebtoken');

const authMiddleware = async(req, res, next) =>{
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'No token' });
  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

const adminOnly = async(req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
  next();
}

module.exports = { authMiddleware, adminOnly };
