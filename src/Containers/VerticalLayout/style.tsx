import styled from "styled-components";

interface IVerticalLayoutContainerProps {
  height: string;
  width?: string;
  gap?: string;
}

export const VerticalLayoutContainer = styled.div<IVerticalLayoutContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: ${({ height }) => height && height};
  ${({ width }) => width && `width: ${width};`}
  ${({ gap }) => gap && `gap: ${gap};`}
`;
