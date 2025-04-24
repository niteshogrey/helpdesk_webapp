const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema(
  {
    title: String,
    status: {
      type: String,
      enum: ["Active", "Pending", "Closed"],
      default: "Active",
    },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    last_updated_on: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Ticket", TicketSchema);
