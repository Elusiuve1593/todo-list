import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../redux/store"
import { filterTasksThunk } from "../../../redux/todo/operations"
import { FilterState } from "../../../redux/todo/slice"
import { AllButton, ButtonContainer, CompletedButton, UncompletedButton } from "./FilterButtons.styled"

export const FilterButtons = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch()

  const filterTasks = (filter: FilterState["filter"]): void => {
    dispatch(filterTasksThunk(filter))
  }

  return (
    <ButtonContainer>
      <AllButton onClick={(): void => filterTasks("all")}>All</AllButton>
      <CompletedButton onClick={(): void => filterTasks("completed")}>Completed</CompletedButton>
      <UncompletedButton onClick={(): void => filterTasks("uncompleted")}>Uncompleted</UncompletedButton>
    </ButtonContainer>
  )
}
