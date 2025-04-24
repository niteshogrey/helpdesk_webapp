const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');

const getallUser =  async (req, res) => {
    const users = await userModel.find();
    res.json(users);
  }

const createUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ name, email, password: hashedPassword, role });
    await user.save();
    res.status(201).json(user);
  }

  module.exports = { getallUser, createUser}