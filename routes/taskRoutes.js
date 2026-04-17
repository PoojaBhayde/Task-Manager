const express = require("express");
const router2 = express.Router();
const taskController = require("../controllers/taskController");
const auth = require("../middleware/auth");

router2.post("/", auth, taskController.createTask);
router2.get("/", auth, taskController.getTasks);
router2.put("/:id", auth, taskController.updateTask);
router2.delete("/:id", auth, taskController.deleteTask);

module.exports = router2;
