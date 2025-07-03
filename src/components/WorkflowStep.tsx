'use client';

import React, { useCallback } from 'react';
import { useWorkflowStore } from '@/hooks/useWorkflow';

interface WorkflowStepProps {
  id: string;
  type: string;
  position: { x: number; y: number };
  isConnectable?: boolean;
  isConnectionStart?: boolean;
  onClick?: () => void;
}

export const WorkflowStep: React.FC<WorkflowStepProps> = ({
  id,
  type,
  position,
  isConnectable,
  isConnectionStart,
  onClick,
}) => {
  console.log('Rendering WorkflowStep:', { id, type, position });
  const updateStepPosition = useWorkflowStore(state => state.updateStepPosition);

  const handleDragStart = useCallback((e: React.DragEvent) => {
    e.dataTransfer.setData('application/workflow-step-id', id);
    e.dataTransfer.effectAllowed = 'move';
  }, [id]);

  const handleDrag = useCallback((e: React.DragEvent) => {
    if (e.clientX === 0 && e.clientY === 0) return; // Ignore invalid positions
    
    const rect = (e.currentTarget.parentElement as HTMLElement).getBoundingClientRect();
    const newPosition = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    
    updateStepPosition(id, newPosition);
  }, [id, updateStepPosition]);

  const getStepIcon = () => {
    switch (type) {
      case 'Start':
        return '▶️';
      case 'Process':
        return '⚙️';
      case 'Decision':
        return '❓';
      case 'End':
        return '⏹️';
      default:
        return '📋';
    }
  };

  return (
    <div
      className={`workflow-step bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-move 
        hover:shadow-lg transition-all
        ${isConnectable ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}
        ${isConnectionStart ? 'ring-2 ring-green-500' : ''}`}
      style={{ left: position.x, top: position.y }}
      draggable
      data-step-id={id}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <span role="img" aria-label={type}>{getStepIcon()}</span>
        <span className="font-medium text-sm">{type}</span>
      </div>
    </div>
  );
};
