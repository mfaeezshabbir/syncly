import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Workflow Steps</h2>
        <div className="space-y-2">
          {/* Add draggable workflow steps here */}
        </div>
      </div>
    </aside>
  );
};
