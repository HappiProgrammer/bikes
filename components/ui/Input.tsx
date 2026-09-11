// components/ui/Input.tsx

import React, { InputHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        className={classNames(
          "w-full rounded-md border border-gray-600 bg-surface text-onSurface placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary",
          className
        )}
        {...rest}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
