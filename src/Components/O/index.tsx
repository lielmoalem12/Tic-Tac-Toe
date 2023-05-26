import { OContainer } from "./style";
import { ReactComponent as OSVG } from "../../assets/O.svg";
interface OProps {
  isWinningSquare?: boolean;
}
export const O = ({ isWinningSquare }: OProps) => {
  return (
    <OContainer isWinningSquare={isWinningSquare}>
      {/* <h1>O</h1> */}

      {/* <OSVG /> */}
    </OContainer>
  );
};
