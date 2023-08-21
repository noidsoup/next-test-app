import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  disabled?: boolean;
  primary?: boolean;
  secondaryBlue?: boolean;
  secondaryWhite?: boolean;
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  primary,
  secondaryBlue,
  secondaryWhite,
  disabled,
  children,
  onClick,
}) => {
  const returnButtonStyle = () => {
    if (secondaryBlue) return styles.secondaryBlue;
    if (secondaryWhite) return styles.secondaryWhite;
    return styles.primary;
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${styles.btn} ${returnButtonStyle()}`}
    >
      {children}
    </button>
  );
};

export default Button;
