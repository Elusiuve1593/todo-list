import type { RootState } from "../store"
import { TodoList } from "./slice"

export const fetchTodo = (
  state: RootState
): { filter: "all" | "completed" | "uncompleted", todos: TodoList[] } =>
  state.todo
