import styled from "styled-components";

interface ScrollerProps {
  selectedIndex: number;
  optionsLength: number;
}

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 58px;
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
  width: 100%;
`;

interface OptionProps {
  selected: boolean;
}

export const Option = styled.div<OptionProps>`
  cursor: pointer;
  opacity: ${(props) => (props.selected ? "1" : "0")};
  transform: ${(props) => (props.selected ? "scale(1)" : "scale(0)")};

  transition: all 0.6s ease;
`;
