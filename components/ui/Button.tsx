// components/ui/Button.tsx

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export const Button = ({
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const variantClasses = {
    primary: "bg-primary text-onSurface hover:bg-primaryDark",
    secondary: "bg-secondary text-onSurface hover:bg-background",
    outline: "border border-primary text-primary hover:bg-primary hover:text-onSurface",
  }[variant];

  return (
    <button
      className={classNames(baseClasses, variantClasses, className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
