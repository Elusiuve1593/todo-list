import styled from "styled-components";

interface NumberProps {
  isZero: boolean;
}

export const Task = styled.div`
  font-size: 20px;
  display: inline-block;
  padding: 10px;
  color: #f5793b;
  @media (max-width: 767.98px) {
    font-size: 19.1px;
  }
`;

export const Number = styled.span<NumberProps>`
  color: ${(props) => (props.isZero ? "###" : "green")};
  font-weight: ${(props) => (props.isZero ? 400 : 500)};
  font-size: 21px;
`;

export const CompletedTaskContainer = styled.div`
  margin: 10px;
`;
