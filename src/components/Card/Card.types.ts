export interface BaseComponentProps {
  children?: React.ReactNode;
  className?: string;
}

export interface CardProps extends BaseComponentProps {
  variant?: "default" | "outlined" | "elevated";
}

export interface CardHeaderProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
}

export interface CardBodyProps extends BaseComponentProps {
  scrollable?: boolean;
}

export interface CardFooterProps extends BaseComponentProps {
  alignment?: "left" | "center" | "right";
}
