import { Button as TButton } from "@material-tailwind/react";
import LoadingSpinner from "../../others/loading-spinner";

export default function Button({
  children,
  type,
  disabled,
  onClick,
  size,
  hollow,
  className,
  full,
  loading,
  btnType,
  icon,
  label,
}) {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const selectedTheme = () => {
    switch (type) {
      case "primary":
        return `${
          hollow
            ? "text-primary bg-white border-2 border-primary"
            : "bg-primary text-white"
        }`;
      case "secondary":
        return `${
          hollow
            ? "text-secondary bg-white border-2 border-secondary"
            : "bg-secondary text-white"
        }`;
      case "warning":
        return `${
          hollow
            ? "text-warning bg-white border-2 border-warning"
            : "bg-warning text-white"
        }`;
      case "caution":
        return `${
          hollow
            ? "text-caution bg-white border-2 border-caution"
            : "bg-caution text-white"
        }`;
      case "success":
        return `${
          hollow
            ? "text-caution bg-white border-2 border-caution"
            : "bg-green-400 text-white"
        }`;
      default:
        return `${
          hollow
            ? "text-primary bg-white border-2 border-primary"
            : "bg-primary text-white"
        }`;
    }
  };
  const selectedSize = () => {
    switch (size) {
      case "small":
        return "sm";
      case "medium":
        return "md";
      case "large":
        return "lg";
      default:
        return "sm";
    }
  };

  return (
    <TButton
      size={selectedSize()}
      disabled={loading || disabled}
      loading={loading}
      className={`
        ${selectedTheme()} 
        ${className}
        ${icon ? "gap-2" : null}
        ${full ? "w-full font-mabry-regular" : ""}
      `}
      onClick={handleClick}
      type={btnType}
    >
      <div className="flex flex-row gap-2 items-center justify-center">
        {icon ? <div>{icon}</div> : null}
        <div className="flex flex-row gap-2 items-center font-mabry-regular normal-case text-base">
          {label}
        </div>
      </div>
    </TButton>
  );
}
