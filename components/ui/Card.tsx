"use client";

// components/ui/Card.tsx

import { motion } from "framer-motion";
import classNames from "classnames";
import React, { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Card = ({ children, className, onClick }: CardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, rotate: 0.5 }}
      whileTap={{ scale: 0.98 }}
      className={classNames(
        "bg-surface rounded-lg shadow-lg overflow-hidden cursor-pointer transition-shadow",
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;
