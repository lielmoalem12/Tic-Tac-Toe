import styled from "styled-components";
import { colors } from "../../utils/colorPallete";
export const HomepageLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${colors.background};
  gap: 5vh;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  color: palevioletred;
  margin: 0;
  margin-top: 1rem;
`;
