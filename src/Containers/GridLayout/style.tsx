import styled from "styled-components";

interface IGridLayoutContainerProps {
  height?: string;
  width?: string;
  gap?: string;
  rows?: string;
  columns?: string;
}

export const GridLayoutContainer = styled.div<IGridLayoutContainerProps>`
  display: grid;
  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => (width ? `width: ${width};` : `width: 100%;`)}
    ${({ gap }) => gap && `gap: ${gap};`}
    ${({ rows }) => rows && `grid-template-rows: ${rows};`}
    ${({ columns }) => columns && `grid-template-columns: ${columns};`}
    // center the grid items
    justify-items: center;
  align-items: center;
  // center the grid itself
  justify-content: first baseline;
  align-content: center;
  span {
    justify-self: start;
  }
  // for mobile view
  @media (max-width: 768px) {
    grid-template-columns: none;
    gap: 1rem;
  }
`;
