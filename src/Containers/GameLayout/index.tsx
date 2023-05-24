import { GameLayoutContainer } from "./style";

interface GameLayoutProps {
  children: React.ReactNode;
}

export const GameLayout = ({ children }: GameLayoutProps) => {
  return <GameLayoutContainer>{children}</GameLayoutContainer>;
};
