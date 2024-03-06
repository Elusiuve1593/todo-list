import styled from "styled-components"

export const AllButton = styled.button`
  cursor: pointer;
  padding: 3px;
  min-width: 50px;
  font-size: 16px;
  margin-right: 5px;
  border-color: #ff7f50;
  @media (max-width: 767.98px) {
    margin-bottom: 5px;
  }
`

export const CompletedButton = styled.button`
  cursor: pointer;
  padding: 3px;
  min-width: 50px;
  font-size: 16px;
  margin-right: 5px;
  border-color: #ff7f50;
  background-color: #60a170;
  @media (max-width: 767.98px) {
    margin-bottom: 5px;
  }
`

export const UncompletedButton = styled.button`
  cursor: pointer;
  padding: 3px;
  min-width: 50px;
  font-size: 16px;
  border-color: #ff7f50;
  background-color: #7f91a1;
`

export const ButtonContainer = styled.div`
  margin: 20px 0 0 5px;
  @media (max-width: 767.98px) {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
