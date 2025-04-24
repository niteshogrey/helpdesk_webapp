const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const register = async(req, res) =>{
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json(newUser);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
}

const login = async(req, res) =>{
    const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
  res.json({ token, user });
}

module.exports = {register, login}