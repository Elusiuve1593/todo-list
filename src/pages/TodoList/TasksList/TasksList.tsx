import { useState } from "react"
import toast from "react-hot-toast"
import { FaRegEdit } from "react-icons/fa"
import { LuTrash } from "react-icons/lu"
import { MdDoneOutline } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch } from "../../../redux/store"
import {
  deleteTaskThunk,
  editTaskThunk,
  isCompletedTaskThunk,
} from "../../../redux/todo/operations"
import { fetchTodo } from "../../../redux/todo/selector"
import {
  CheckBox,
  DeleteButton,
  EditButton,
  EditInput,
  TaskListContainer,
  TasksContainer,
  Title,
} from "./TaskList.styled"
import { FilterButtons } from "../FilterButtons/FilterButtons"

export const TasksList = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch()
  const todoList = useSelector(fetchTodo)

  let filteredTasks = todoList.todos

  if (todoList.filter === "uncompleted") {
    filteredTasks = todoList.todos.filter((el) => !el.completed)
  }

  if (todoList.filter === "completed") {
    filteredTasks = todoList.todos.filter((el) => el.completed)
  }

  const [isCompleted, setCompleted] = useState<{ [key: number]: boolean }>()
  const [editMode, setEditMode] = useState<number | null>(null)
  const [editTitle, setEditTitle] = useState<string>("")

  const toggleCheckboxHandler = (id: number, completed: boolean): void => {
    const updatedCompletedStates = {
      ...isCompleted,
      [id]: !completed,
    }
    setCompleted(updatedCompletedStates)
    const value = {
      id: id,
      completed: !completed,
    }
    dispatch(isCompletedTaskThunk(value))
  }

  const editTitleHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEditTitle(event.currentTarget.value)
  }

  const editTaskHandler = (id: number): void => {
    setEditMode(id)
  }

  const updateTaskHandler = (id: number): string | undefined => {
    if (!editTitle) {
      return toast("Put a message, please")
    }
    const value = {
      id: id,
      title: editTitle,
    }
    dispatch(editTaskThunk(value))
    setEditMode(null)
    setEditTitle("")
  }

  const handleKeyDown = (
    id: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Escape") {
      setEditMode(null)
    }
    if (event.key === "Enter") {
      updateTaskHandler(id)
    }
  }

  const deleteTaskHandler = (id: number): void => {
    dispatch(deleteTaskThunk(id))
  }

  return (
    <TaskListContainer>
      {filteredTasks.map(({ id, title }) => 
        <TasksContainer key={id}>
          <CheckBox
            type="checkbox"
            checked={isCompleted && isCompleted[id] || false}
            onChange={(): void =>
              toggleCheckboxHandler(
                id,
                isCompleted && isCompleted[id] || false
              )
            }
          />

          {editMode === id ? 
            <EditInput
              autoFocus
              type="text"
              value={editTitle}
              onChange={editTitleHandler}
              onKeyDown={(event): void => handleKeyDown(id, event)}
            />
            : 
            <Title isCompleted={isCompleted && isCompleted[id]}>{title}</Title>
          }

          <EditButton
            onClick={(): string | void =>
              editMode === id ? updateTaskHandler(id) : editTaskHandler(id)
            }
          >
            {editMode === id ? 
              <MdDoneOutline size={23} color="#1a9340" />
              : 
              <FaRegEdit size={23} color="#FF7F50" />
            }
          </EditButton>

          <DeleteButton
            type="button"
            onClick={(): void => deleteTaskHandler(id)}
          >
            <LuTrash size={23} color="#db2828" />
          </DeleteButton>
        </TasksContainer>
      )}
      <FilterButtons />
    </TaskListContainer>
  )
}
