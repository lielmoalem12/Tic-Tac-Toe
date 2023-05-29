import React from "react";
import { X } from "../X";
import { O } from "../O";
import { SquareContainer } from "./style";

interface SquareProps {
  value: string;
  onClick: () => void;
  isWinningSquare: boolean;
  boardSize: number;
}

export const Square = ({
  value,
  onClick,
  isWinningSquare,
  boardSize,
}: SquareProps) => {
  return (
    <SquareContainer
      value={value}
      isClickable={true}
      isWinningSquare={isWinningSquare}
      className="square"
      onClick={onClick}
      boardSize={boardSize}
    >
      <div>
        {value == "X" ? (
          <X isWinningSquare={isWinningSquare} />
        ) : value == "O" ? (
          <O isWinningSquare={isWinningSquare} />
        ) : null}
      </div>
    </SquareContainer>
  );
};
