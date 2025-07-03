"use client";

import React from "react";
import { WorkflowStep } from "@/hooks/useWorkflow";

interface ConfigPanelProps {
  step: WorkflowStep | null;
  onClose: () => void;
  onUpdate: (config: Record<string, unknown>) => void;
}

export const ConfigPanel: React.FC<ConfigPanelProps> = ({
  step,
  onClose,
  onUpdate,
}) => {
  if (!step) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const config: Record<string, unknown> = {};
    formData.forEach((value, key) => {
      config[key] = value;
    });
    onUpdate(config);
  };

  return (
    <div className="fixed right-0 top-0 h-screen w-80 bg-white dark:bg-gray-800 shadow-lg p-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Configure {step.type}</h2>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ✕
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {step.type === "Process" && (
          <>
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                title="Name of the process step"
                type="text"
                name="name"
                defaultValue={step.config?.name as string}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                title="Description of the process step"
                name="description"
                defaultValue={step.config?.description as string}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                rows={3}
              />
            </div>
          </>
        )}
        {step.type === "Decision" && (
          <>
            <div>
              <label className="block text-sm font-medium mb-1">
                Condition
              </label>
              <input
                title="Condition for the decision step"
                type="text"
                name="condition"
                defaultValue={step.config?.condition as string}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Save
        </button>
      </form>
    </div>
  );
};
