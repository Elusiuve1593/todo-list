import { useSelector } from "react-redux";
import { fetchTodo } from "../../../redux/todo/selector";
import { CompletedTaskContainer, Number, Task } from "./CompletedTasks.styled";

export const CompletedTasks = () => {
  const countCompletedTasks = useSelector(fetchTodo).todos.filter(
    ({ completed }) => completed
  );

  return (
    <CompletedTaskContainer>
      <Task>Completed tasks count :</Task>
      <Number isZero={countCompletedTasks.length === 0}>
        {countCompletedTasks.length}
      </Number>
    </CompletedTaskContainer>
  );
};
