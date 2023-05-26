import styled from "styled-components";

interface ScrollerProps {
  selectedIndex: number;
  optionsLength: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 2rem;
  height: 100%;
`;

export const Scroller = styled.div<ScrollerProps>`
  display: flex;
  transform: translateX(
    -${(props) => props.selectedIndex * (100 / props.optionsLength)}%
  );
  transition: transform 0.3s ease;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 2rem;
`;

interface OptionProps {
  selected: boolean;
}

export const Option = styled.span<OptionProps>`
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;
  opacity: ${(props) => (props.selected ? "1" : "0")};
  transition: opacity 0.3s ease;

  &:hover {
    color: blue;
  }
`;
