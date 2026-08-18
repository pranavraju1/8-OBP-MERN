import express from "express";

import {
  getTodos,
  createTodo,
  toggleCompleted,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController.js";

const router = express.Router();


// GET all todos
router.get("/", getTodos);


// CREATE todo
router.post("/", createTodo);


// TOGGLE completed
router.patch("/toggle-completed/:id", toggleCompleted);


// UPDATE todo
router.put("/:id", updateTodo);


// DELETE todo
router.delete("/:id", deleteTodo);


export default router;