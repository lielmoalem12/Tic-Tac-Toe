import styled from "styled-components";

interface BoardContainerProps {
  boardSize: number;
}

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${({ boardSize }: BoardContainerProps) => boardSize},
    1fr
  );
  grid-gap: 1px;
  width: fit-content;
  background-color: #3c3c3c;
`;
