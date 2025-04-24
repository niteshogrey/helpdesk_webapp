const { register, login } = require('../controllers/authControllers');

const auth = require('express').Router();

auth.post("/register", register) // http://localhost:1000/api/v1/auth/register
auth.post("/login", login) //http://localhost:1000/api/v1/auth/login

module.exports= auth