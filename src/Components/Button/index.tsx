import { ButtonContainer } from "./style";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => (
  <ButtonContainer onClick={onClick}>{text}</ButtonContainer>
);
