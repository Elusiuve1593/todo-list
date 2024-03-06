import { createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"
import {
  FilterState,
  TodoList,
  completeTask,
  createTask,
  deleteTask,
  editTask,
  filterTasks,
} from "./slice"

export const addTaskThunk = createAsyncThunk(
  "todo/addTodoList",
  (value: TodoList, { dispatch }) => {
    try {
      dispatch(createTask({ task: value }))
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    }
  }
)

export const deleteTaskThunk = createAsyncThunk(
  "todo/deleteTodoList",
  (id: number, { dispatch }) => {
    try {
      dispatch(deleteTask({ id }))
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    }
  }
)

export const editTaskThunk = createAsyncThunk(
  "todo/editTodoList",
  (value: TodoList, { dispatch }) => {
    try {
      dispatch(editTask({ task: value }))
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    }
  }
)

export const isCompletedTaskThunk = createAsyncThunk(
  "todo/isCompletedTaskThunk",
  (value: TodoList, { dispatch }) => {
    try {
      dispatch(completeTask({ isDone: value }))
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    }
  }
)

export const filterTasksThunk = createAsyncThunk(
  "todo/filterTasksThunk",
  (value: FilterState["filter"], { dispatch }) => {
    try {
      dispatch(filterTasks({ filter: value }))
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    }
  }
)
