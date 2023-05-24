import React from "react";
import { X } from "../X";
import { O } from "../O";
import { SquareContainer } from "./style";

interface SquareProps {
  value: string;
  onClick: () => void;
  isWinningSquare: boolean;
}

export const Square = ({ value, onClick, isWinningSquare }: SquareProps) => {
  return (
    <SquareContainer
      value={value}
      isClickable={true}
      isWinningSquare={isWinningSquare}
      className="square"
      onClick={onClick}
    >
      {value == "X" ? <X /> : value == "O" ? <O /> : null}
    </SquareContainer>
  );
};
