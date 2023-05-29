import { XContainer } from "./style";

interface XProps {
  isWinningSquare?: boolean;
}

export const X = ({ isWinningSquare }: XProps) => {
  return <XContainer isWinningSquare={isWinningSquare} />;
};
