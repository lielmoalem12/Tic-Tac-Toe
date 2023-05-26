import { HorizontalLayoutContainer } from "./style";

interface IHorizontalLayoutProps {
  children: React.ReactNode;
  width: string;
  height?: string;
  gap?: string;
}
export const HorizontalLayout = ({
  children,
  width,
  height,
  gap,
}: IHorizontalLayoutProps) => {
  return (
    <HorizontalLayoutContainer width={width} height={height} gap={gap}>
      {children}
    </HorizontalLayoutContainer>
  );
};
