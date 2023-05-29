import styled from "styled-components";
import { colors } from "../../utils/colorPallete";
export const HomepageLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  height: 100vh;
  width: 100vw;
  background-color: ${colors.background};
  gap: 5vh;

  @media (max-width: 768px) {
    gap: 5vh;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: ${colors.header};
  margin: 0;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 0.5rem;
  }
`;
