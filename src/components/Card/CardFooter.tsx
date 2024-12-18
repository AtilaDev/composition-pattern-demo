import { CardFooterProps } from "./Card.types";

const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = "",
  alignment = "right",
}) => {
  const alignmentClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <div
      className={`
      flex items-center 
      px-4 py-3 
      border-t border-gray-200 
      ${alignmentClasses[alignment]}
      ${className}
    `}
    >
      {children}
    </div>
  );
};

export default CardFooter;
