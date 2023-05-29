import { HomepageLayoutContainer, Title } from "./style";

interface HomepageLayoutProps {
  children: React.ReactNode;
}

export const HomepageLayout = ({ children }: HomepageLayoutProps) => {
  return (
    <HomepageLayoutContainer>
      <Title>Tic-Tac-Toe</Title>
      {children}
    </HomepageLayoutContainer>
  );
};
