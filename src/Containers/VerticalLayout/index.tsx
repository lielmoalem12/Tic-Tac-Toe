import { VerticalLayoutContainer } from "./style";

interface IVerticalLayoutProps {
  children: React.ReactNode;
  height: string;
  width?: string;
  gap?: string;
}
export const VerticalLayout = ({
  children,
  width,
  height,
  gap,
}: IVerticalLayoutProps) => {
  return (
    <VerticalLayoutContainer width={width} height={height} gap={gap}>
      {children}
    </VerticalLayoutContainer>
  );
};
