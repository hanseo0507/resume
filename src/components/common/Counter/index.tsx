import React, { useEffect, useRef } from 'react';

import { animate } from 'framer-motion';

export interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  fixed?: number;

  style?: React.CSSProperties;
}

export const Counter: React.FC<CounterProps> = ({ from, to, duration = 1, fixed = 0, style }) => {
  const nodeRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration,
      onUpdate: (value) => {
        node.textContent = parseInt(value.toFixed(fixed)).toLocaleString();
      },
    });

    return () => controls.stop();
  }, [from, to, duration, fixed]);

  return <span style={style} ref={nodeRef} />;
};
