import styled from "styled-components";
import { colors } from "../../utils/colorPallete";

export const Score = styled.span`
  font-weight: bold;
  font-size: 1.8rem;
  // text color that aligns with the background color #B1EA9F
  color: ${colors.score} !important;
`;

export const PlayerScoreContainer = styled.div`
  /* border: 1px solid gray; */
  background-color: #ff91003c;
  padding: 0.7rem 0.3rem;
  border-radius: 20px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  p {
    margin: 0;
    font-weight: bold;
  }

  span {
    font-weight: bold;
    /* color: ${colors.header}; */
    color: ${colors.player};
  }

  .player {
    text-decoration: underline;
    text-decoration-color: ${colors.playerSecondary};
    /* line-height: 1.5rem; */
    padding: 0.1rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;
