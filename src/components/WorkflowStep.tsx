import React from 'react';

interface WorkflowStepProps {
  id: string;
  type: string;
  position: { x: number; y: number };
}

export const WorkflowStep: React.FC<WorkflowStepProps> = ({ id, type, position }) => {
  return (
    <div
      className="absolute bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-move"
      style={{ left: position.x, top: position.y }}
      draggable
      data-step-id={id}
    >
      <div className="font-medium text-sm">{type}</div>
    </div>
  );
};
