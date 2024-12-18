import { CardBodyProps } from "./Card.types";

const CardBody: React.FC<CardBodyProps> = ({
  children,
  className = "",
  scrollable = false,
}) => {
  return (
    <div
      className={`
      px-4 py-3 
      ${scrollable ? "overflow-y-auto max-h-64" : ""}
      ${className}
    `}
    >
      {children}
    </div>
  );
};

export default CardBody;
