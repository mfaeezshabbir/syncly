'use client';

import React from 'react';
import Xarrow from 'react-xarrows';

interface ConnectionLineProps {
  id: string;
  start: string;
  end: string;
  onClick?: () => void;
}

export const ConnectionLine: React.FC<ConnectionLineProps> = ({
  id,
  start,
  end,
  onClick,
}) => {
  return (
    <Xarrow
      start={start}
      end={end}
      key={id}
      path="smooth"
      color="#94a3b8"
      strokeWidth={2}
      headSize={6}
      curveness={0.3}
      passProps={onClick ? { onClick } : undefined}
      showHead={true}
    />
  );
};
