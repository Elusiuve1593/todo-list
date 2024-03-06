import { Todo } from "../pages/TodoList/Todo"
import { Container, Main, Wrapper } from "./App.styled"

export const App = (): JSX.Element => {
  return (
    <Wrapper>
      <Main>
        <Container>
          <Todo />
        </Container>
      </Main>
    </Wrapper>
  )
}
