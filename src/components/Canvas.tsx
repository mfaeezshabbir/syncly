'use client';

import React, { useCallback, useState } from 'react';
import { WorkflowStep } from './WorkflowStep';
import { useWorkflowStore } from '@/hooks/useWorkflow';
import { ConnectionLine } from './ConnectionLine';
import { ConfigPanel } from './ConfigPanel';
import type { WorkflowStep as WorkflowStepType } from '@/hooks/useWorkflow';

interface CanvasProps {
  children?: React.ReactNode;
}

export const Canvas: React.FC<CanvasProps> = ({ children }) => {
  const { steps, connections, addStep, addConnection, updateStepConfig } = useWorkflowStore();
  const [selectedStep, setSelectedStep] = useState<WorkflowStepType | null>(null);
  const [isCreatingConnection, setIsCreatingConnection] = useState(false);
  const [connectionStart, setConnectionStart] = useState<string | null>(null);

  // Add effect to log state changes
  React.useEffect(() => {
    console.log('Current workflow state:', { steps, connections });
  }, [steps, connections]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const stepType = e.dataTransfer.getData('application/workflow-step');
    console.log('Drop event:', { stepType });
    
    if (stepType) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const position = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      const newStep = {
        id: `step-${Date.now()}`,
        type: stepType,
        position,
      };
      console.log('Adding step:', newStep);
      addStep(newStep);
    }
  }, [addStep]);

  const handleStepClick = useCallback((step: WorkflowStepType) => {
    if (isCreatingConnection) {
      if (connectionStart && connectionStart !== step.id) {
        addConnection({
          id: `conn-${Date.now()}`,
          sourceId: connectionStart,
          targetId: step.id,
        });
        setIsCreatingConnection(false);
        setConnectionStart(null);
      }
    } else {
      setSelectedStep(step);
    }
  }, [isCreatingConnection, connectionStart, addConnection]);

  const handleConfigUpdate = useCallback((config: Record<string, unknown>) => {
    if (selectedStep) {
      updateStepConfig(selectedStep.id, config);
      setSelectedStep(null);
    }
  }, [selectedStep, updateStepConfig]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'c') {
      setIsCreatingConnection(true);
    } else if (e.key === 'Escape') {
      setIsCreatingConnection(false);
      setConnectionStart(null);
      setSelectedStep(null);
    }
  }, []);

  // Add keyboard event listener
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div 
      className="w-full h-full bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div 
        className="w-full h-full relative" 
        role="application" 
        aria-label="Workflow canvas"
      >
        {connections.map((conn) => (
          <ConnectionLine
            key={conn.id}
            id={conn.id}
            start={conn.sourceId}
            end={conn.targetId}
          />
        ))}
        {steps.map((step) => (
          <WorkflowStep
            key={step.id}
            id={step.id}
            type={step.type}
            position={step.position}
            isConnectable={isCreatingConnection}
            isConnectionStart={connectionStart === step.id}
            onClick={() => handleStepClick(step)}
          />
        ))}
        {children}
      </div>
      {selectedStep && (
        <ConfigPanel
          step={selectedStep}
          onClose={() => setSelectedStep(null)}
          onUpdate={handleConfigUpdate}
        />
      )}
    </div>
  );
};
