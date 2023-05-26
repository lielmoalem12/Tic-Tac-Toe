import { useEffect, useRef, useState } from "react";
import {
  Container,
  Option,
  OptionContainer,
  ScrollContainer,
  Scroller,
} from "./style";
import { Button } from "../Button";

export interface OptionObject {
  value: number;
  label: string;
}

interface HorizontalScrollerProps {
  options: OptionObject[];
  onChange: (value: number) => void;
}

export const HorizontalScroller = ({
  options,
  onChange,
}: HorizontalScrollerProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current) return;
    onChange(selectedOption.value);
    const currentIndex = options.findIndex(
      (option) => option.value === selectedOption.value
    );
    const scrollerWidth = scrollerRef.current.offsetWidth;
    const optionWidth = scrollerWidth / options.length;
    const scrollerOffset = currentIndex * optionWidth;
    scrollerRef.current.style.transform = `translateX(-${scrollerOffset}px)`;
  }, [selectedOption]);

  const handleOptionClick = (option: OptionObject) => {
    setSelectedOption(option);
  };

  const handlePrevious = () => {
    const currentIndex = options.findIndex(
      (option) => option.value === selectedOption.value
    );
    if (currentIndex > 0) {
      setSelectedOption(options[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    const currentIndex = options.findIndex(
      (option) => option.value === selectedOption.value
    );
    if (currentIndex < options.length - 1) {
      setSelectedOption(options[currentIndex + 1]);
    }
  };

  return (
    <Container>
      <Button onClick={handlePrevious} text="&lt;"></Button>
      <ScrollContainer>
        <Scroller
          ref={scrollerRef}
          optionsLength={options.length}
          selectedIndex={selectedOption.value}
        >
          {options.map((option) => (
            <OptionContainer key={option.value}>
              {/* <Option
                selected={selectedOption.value === option.value}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </Option> */}
              <Option selected={selectedOption.value === option.value}>
                <Button
                  onClick={() => handleOptionClick(option)}
                  text={option.label}
                />
              </Option>
            </OptionContainer>
          ))}
        </Scroller>
      </ScrollContainer>
      <Button onClick={handleNext} text="&gt;"></Button>
    </Container>
  );
};
