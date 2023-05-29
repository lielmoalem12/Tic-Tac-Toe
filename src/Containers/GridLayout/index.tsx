import { GridLayoutContainer } from "./style";

interface GridLayoutProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  gap?: string;
  rows?: string;
  columns?: string;
}

export const GridLayout = ({
  children,
  width,
  height,
  gap,
  rows,
  columns,
}: GridLayoutProps) => {
  return (
    <GridLayoutContainer
      width={width}
      height={height}
      gap={gap}
      rows={rows}
      columns={columns}
    >
      {children}
    </GridLayoutContainer>
  );
};
