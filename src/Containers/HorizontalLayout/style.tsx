import styled from "styled-components";

interface IHorizontalLayoutContainerProps {
  width: string;
  height?: string;
  gap?: string;
}

export const HorizontalLayoutContainer = styled.div<IHorizontalLayoutContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${({ width }) => width && width};
  ${({ height }) => height && `height: ${height};`}
  ${({ gap }) => gap && `gap: ${gap};`}
`;
