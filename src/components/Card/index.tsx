import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { CardProps } from "./Card.types";

export const Card: React.FC<CardProps> & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
} = ({ children, className = "", variant = "default" }) => {
  const variantClasses = {
    default: "bg-white shadow-sm",
    outlined: "bg-white border border-gray-200",
    elevated: "bg-white shadow-md",
  };

  return (
    <div
      className={`
      rounded-lg 
      ${variantClasses[variant]}
      ${className}
    `}
    >
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
