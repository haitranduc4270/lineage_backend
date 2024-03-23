const Node = require("../models/nodes");

const getNodes = async (req, res) => {
  try {
    const nodes = await Node.find();
    res.json(nodes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNodes = async (req, res) => {
  const { nodes, edges } = req.body;
  try {
    const newNode = await Node.findOneAndUpdate(
      { key: "TEMP" },
      { nodes, edges },
      { upsert: true, new: true }
    );
    res.status(201).json(newNode);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getNodes, createNodes };
