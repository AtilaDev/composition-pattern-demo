import { CardHeaderProps } from "./Card.types";

const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = "",
  title,
  subtitle,
}) => {
  return (
    <div className={`px-4 py-3 border-b border-gray-200 ${className}`}>
      {(title || subtitle) && (
        <div>
          {title && (
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          )}
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
};

export default CardHeader;
