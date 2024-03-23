var express = require("express");
var router = express.Router();

const nodeController = require("../controllers/nodes");

/* GET users listing. */
router.get("/", nodeController.getNodes);
router.post("/", nodeController.createNodes);

module.exports = router;
