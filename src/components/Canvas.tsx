import React from 'react';

interface CanvasProps {
  children?: React.ReactNode;
}

export const Canvas: React.FC<CanvasProps> = ({ children }) => {
  return (
    <div className="w-full h-full bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden">
      <div className="w-full h-full relative" role="application" aria-label="Workflow canvas">
        {children}
      </div>
    </div>
  );
};
