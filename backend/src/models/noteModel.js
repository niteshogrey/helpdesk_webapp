const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  content: String,
  attachment: String,
  ticket: { type: mongoose.Schema.Types.ObjectId, ref: "Ticket" },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  created_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Note", NoteSchema);
