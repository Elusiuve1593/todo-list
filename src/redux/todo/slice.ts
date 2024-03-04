import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TodoList {
  id: number;
  title?: string;
  completed?: boolean;
}

export interface FilterState {
  filter: "all" | "completed" | "uncompleted";
}

const initialState: {
  filter: "all" | "completed" | "uncompleted";
  todos: TodoList[];
} = {
  filter: "all",
  todos: [{ id: Date.now(), title: "Task", completed: false }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    fetchTasks(state, action: PayloadAction<{ todo: TodoList[] }>) {
      state.todos = action.payload.todo;
    },
    createTask(state, action: PayloadAction<{ task: TodoList }>) {
      state.todos.unshift(action.payload.task);
    },
    deleteTask(state, action: PayloadAction<{ id: number }>) {
      state.todos = state.todos.filter((el) => el.id !== action.payload.id);
    },
    editTask(state, action: PayloadAction<{ task: TodoList }>) {
      state.todos = state.todos.map((el) =>
        el.id === action.payload.task.id
          ? { ...el, title: action.payload.task.title }
          : el
      );
    },
    completeTask(state, action: PayloadAction<{ isDone: TodoList }>) {
      state.todos = state.todos.map((el) =>
        el.id === action.payload.isDone.id
          ? { ...el, completed: action.payload.isDone.completed }
          : el
      );
    },
    filterTasks(
      state,
      action: PayloadAction<{ filter: FilterState["filter"] }>
    ) {
      state.filter = action.payload.filter;
    },
  },
});

export const {
  fetchTasks,
  createTask,
  deleteTask,
  editTask,
  completeTask,
  filterTasks,
} = todoSlice.actions;
export default todoSlice.reducer;
