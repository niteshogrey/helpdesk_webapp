const noteModel = require("../models/noteModel");
const ticketModel = require("../models/ticketModel");


const createTicket = async (req, res) => {
    const ticket = new ticketModel({ ...req.body, customer: req.user.id });
    await ticket.save();
    res.status(201).json(ticket);
  }

const getTicket = async (req, res) => {
    const filter = req.user.role === 'customer' ? { customer: req.user.id } : {};
    const tickets = await ticketModel.find(filter).populate('customer').sort({ updatedAt: -1 });
    res.json(tickets);
  }

  const updateTicket = async (req, res) => {
    const note = new noteModel({ ...req.body, ticket: req.params.id, created_by: req.user.id });
    await note.save();
    await ticketModel.findByIdAndUpdate(req.params.id, { last_updated_on: new Date() });
    res.status(201).json(note);
  }

  module.exports = { createTicket, getTicket, updateTicket}