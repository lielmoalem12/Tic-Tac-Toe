import styled, { keyframes } from "styled-components";
import { colors } from "../../utils/colorPallete";

interface BoardContainerProps {
  boardSize: number;
  isGameOver: boolean;
}

const showOpacity = keyframes`
  from {
    opacity: 0;
    transform: scale(0) translate(-50%, -50%);
  }
  to {
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
  }
`;

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${({ boardSize }: BoardContainerProps) => boardSize},
    1fr
  );
  grid-gap: 2px;
  grid-area: board;
  width: fit-content;
  /* background-color: #3c3c3c97; */
  background-color: #154b1342;
  height: 40vh;
  max-height: 60vw;
  aspect-ratio: 1;
  border: 1px hidden ${colors.background};

  position: relative;
  .playAgain {
    display: ${({ isGameOver }) => (isGameOver ? "flex" : "none")};
    position: absolute;
    /* height: 50vh; */
    max-height: 60vw;
    aspect-ratio: 1;
    /* background-color: #5e88606d; */
    flex-direction: column;
    /* text-align: center; */

    justify-content: space-evenly;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;

    opacity: 0;
    animation: ${showOpacity} 0.5s ease-in-out 2s forwards;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 120%;
    p {
      /* background-color: #1e2e1ed4; */
      background-color: ${colors.buttonShade};
      border-radius: 20px;
      padding: 1rem;
      padding-top: 0.4rem;
      text-align: center;
      margin: 0;
      color: #ffffffcf;
      /* color: #ce5252; */
      justify-self: end !important;
      box-shadow: 0 0 5px 1px ${colors.backgroundShade};
    }
    button {
      /* text-transform: uppercase; */
      font-size: 1.3rem;
      color: white;
    }
  }

  @media (max-width: 768px) {
    box-shadow: #3c3c3c 0px 0px 5px 2px;
    .playAgain {
      p {
        font-size: 1.5rem;
      }
    }
    /* :after {
      margin-top: 0vh;
      margin-left: 0vh;
      height: 100%;
    } */
  }
`;
