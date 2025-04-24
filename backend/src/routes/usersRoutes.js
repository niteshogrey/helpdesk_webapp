const { getallUser, createUser } = require('../controllers/usersController');
const { authMiddleware, adminOnly } = require('../middlewares/authMiddleware');

const user = require('express').Router();

user.use(authMiddleware)

user.get("/", adminOnly, getallUser) //http://localhost:1000/api/v1/user

user.post("/", adminOnly, createUser) //http://localhost:1000/api/v1/user

module.exports = user