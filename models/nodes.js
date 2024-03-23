const mongoose = require("mongoose");

const nodeSchema = new mongoose.Schema(
  { nodes: [{}], edges: [{}], key: String },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Nodes", nodeSchema);
