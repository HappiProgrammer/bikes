// components/ui/Badge.tsx

import classNames from "classnames";
import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export const Badge = ({
  children,
  variant = "primary",
  className,
}: BadgeProps) => {
  const base = "inline-block px-2 py-0.5 text-xs font-medium rounded-full";
  const variants = {
    primary: "bg-primary text-onSurface",
    secondary: "bg-secondary text-onSurface",
    outline: "border border-primary text-primary",
  }[variant];
  return (
    <span className={classNames(base, variants, className)}>{children}</span>
  );
};

export default Badge;
