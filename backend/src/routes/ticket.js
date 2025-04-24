const { createTicket, getTicket, updateTicket } = require('../controllers/ticketController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const ticket = require('express').Router();

ticket.use(authMiddleware)

ticket.post("/", createTicket) //http://localhost:1000/api/v1/ticket

ticket.get("/", getTicket) //http://localhost:1000/api/v1/ticket

ticket.post("/:id/notes", updateTicket) //http://localhost:1000/api/v1/ticket/6809dbe64352d5d80114f93a/notes

module.exports = ticket