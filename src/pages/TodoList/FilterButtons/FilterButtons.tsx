import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { filterTasksThunk } from "../../../redux/todo/operations";
import { FilterState } from "../../../redux/todo/slice";
import { AllButton, ButtonContainer, CompletedButton, UncompletedButton } from "./FilterButtons.styled";

export const FilterButtons = () => {
  const dispatch: AppDispatch = useDispatch();

  const filterTasks = (filter: FilterState["filter"]) => {
    dispatch(filterTasksThunk(filter));
  };

  return (
    <ButtonContainer>
      <AllButton onClick={() => filterTasks("all")}>All</AllButton>
      <CompletedButton onClick={() => filterTasks("completed")}>Completed</CompletedButton>
      <UncompletedButton onClick={() => filterTasks("uncompleted")}>Uncompleted</UncompletedButton>
    </ButtonContainer>
  );
};
