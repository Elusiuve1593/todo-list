import { AddTask } from "./AddTask/AddTask";
import { CompletedTasks } from "./CompletedTasks/CompletedTasks";
import { TasksList } from "./TasksList/TasksList";
import { TodoContainer } from "./Todo.styled";

export const Todo = () => {
  return (
    <TodoContainer>
      <AddTask />
      <CompletedTasks />
      <TasksList />
    </TodoContainer>
  );
};
