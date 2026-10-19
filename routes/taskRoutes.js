const express = require("express");

const router = express.Router();

const {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

const validateTask = require("../middleware/taskValidation");

const authenticate = require("../middleware/auth");

router.get("/", authenticate, getTasks);

router.get("/:id", authenticate, getTaskById);

router.post("/", authenticate, validateTask, createTask);

router.put("/:id", authenticate, validateTask, updateTask);

router.delete("/:id", authenticate, deleteTask);


module.exports = router;

