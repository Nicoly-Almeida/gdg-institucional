'use client';

import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

/**
 * Scroll reveal: entra com opacity 0→1 + translateY(26px)→0,
 * .7s cubic-bezier(.2,.7,.2,1), uma vez (whileInView + viewport once).
 */
export default function Reveal({
  children,
  style,
  id,
  className,
  as = 'div'
}: {
  children: ReactNode;
  style?: CSSProperties;
  id?: string;
  className?: string;
  as?: 'div' | 'section' | 'header';
}) {
  const MotionTag =
    as === 'section' ? motion.section : as === 'header' ? motion.header : motion.div;

  return (
    <MotionTag
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </MotionTag>
  );
}
