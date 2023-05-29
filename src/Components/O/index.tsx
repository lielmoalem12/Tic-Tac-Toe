import { OContainer } from "./style";
interface OProps {
  isWinningSquare?: boolean;
}
export const O = ({ isWinningSquare }: OProps) => {
  return <OContainer isWinningSquare={isWinningSquare} />;
};
