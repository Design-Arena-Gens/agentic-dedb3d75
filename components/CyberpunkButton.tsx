'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type CyberpunkButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function CyberpunkButton({ children, onClick, className = '' }: CyberpunkButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, rotate: -0.25, skewX: -2 }}
      whileTap={{ scale: 0.98, rotate: 0.15, skewX: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22, mass: 0.6 }}
      onClick={onClick}
      className={`cyber-btn noise scanlines ${className}`}
    >
      <span className="content">{children}</span>

      <span className="glitch" aria-hidden="true">
        <span className="slice" />
        <span className="slice" />
        <span className="slice" />
        <span className="slice" />
        <span className="slice" />
        <span className="slice" />
      </span>

      <span className="scanline" aria-hidden="true" />
    </motion.button>
  );
}
