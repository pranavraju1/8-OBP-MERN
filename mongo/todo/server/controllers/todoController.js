import Todo from "../models/todoModel.js";

// Get all todos
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    res.status(200).json({
      data: todos,
      message: "Todos fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch todos",
      error: error.message,
    });
  }
};


// Create a todo
export const createTodo = async (req, res) => {
  try {
    const { task, completed = false } = req.body;

    if (!task || typeof task !== "string" || task.trim() === "") {
      return res.status(400).json({
        message: "Task is required and must be a non-empty string",
      });
    }

    if (typeof completed !== "boolean") {
      return res.status(400).json({
        message: "Completed must be a boolean",
      });
    }

    const newTodo = await Todo.create({
      task: task.trim(),
      completed,
    });

    res.status(201).json({
      data: newTodo,
      message: "Todo created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create todo",
      error: error.message,
    });
  }
};


// Toggle completed status
export const toggleCompleted = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    todo.completed = !todo.completed;

    await todo.save();

    res.status(200).json({
      data: todo,
      message: "Todo completed status toggled successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to toggle todo",
      error: error.message,
    });
  }
};


// Edit a todo
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { task, completed } = req.body;

    if (
      task !== undefined &&
      (typeof task !== "string" || task.trim() === "")
    ) {
      return res.status(400).json({
        message: "Task must be a non-empty string",
      });
    }

    if (completed !== undefined && typeof completed !== "boolean") {
      return res.status(400).json({
        message: "Completed must be a boolean",
      });
    }

    const updateData = {};

    if (task !== undefined) {
      updateData.task = task.trim();
    }

    if (completed !== undefined) {
      updateData.completed = completed;
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedTodo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json({
      data: updatedTodo,
      message: "Todo updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update todo",
      error: error.message,
    });
  }
};


// Delete a todo
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json({
      data: deletedTodo,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete todo",
      error: error.message,
    });
  }
};