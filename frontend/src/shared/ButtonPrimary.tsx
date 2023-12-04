import Button, { ButtonProps } from "./Button";
import React from "react";

export interface ButtonPrimaryProps extends ButtonProps {
  icon?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = "",
  icon,
  children,
  ...args
}) => {
  return (
    <Button
      className={`ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${className}`}
      {...args}
    >
      {icon && <i className={`${icon} text-2xl mr-2`}></i>}
      {children}
    </Button>
  );
};

export default ButtonPrimary;
