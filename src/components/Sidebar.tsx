'use client';

import React, { useCallback } from 'react';

const WORKFLOW_STEPS = [
  { type: 'Start', icon: '▶️' },
  { type: 'Process', icon: '⚙️' },
  { type: 'Decision', icon: '❓' },
  { type: 'End', icon: '⏹️' },
];

export const Sidebar: React.FC = () => {
  const handleDragStart = useCallback((e: React.DragEvent, type: string) => {
    e.dataTransfer.setData('application/workflow-step', type);
    e.dataTransfer.effectAllowed = 'copy';
  }, []);

  return (
    <aside className="w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Workflow Steps</h2>
        <div className="space-y-2">
          {WORKFLOW_STEPS.map(({ type, icon }) => (
            <div
              key={type}
              draggable
              className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-move hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              onDragStart={(e) => handleDragStart(e, type)}
            >
              <span role="img" aria-label={type}>{icon}</span>
              <span className="font-medium">{type}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
