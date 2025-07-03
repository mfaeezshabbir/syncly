import { create } from "zustand";

export interface WorkflowStep {
  id: string;
  type: string;
  position: { x: number; y: number };
  config?: Record<string, unknown>;
}

interface Connection {
  id: string;
  sourceId: string;
  targetId: string;
}

interface WorkflowState {
  steps: WorkflowStep[];
  connections: Connection[];
  addStep: (step: WorkflowStep) => void;
  updateStepPosition: (id: string, position: { x: number; y: number }) => void;
  updateStepConfig: (id: string, config: Record<string, unknown>) => void;
  addConnection: (connection: Connection) => void;
  removeStep: (id: string) => void;
  removeConnection: (id: string) => void;
}

export const useWorkflowStore = create<WorkflowState>((set) => ({
  steps: [],
  connections: [],
  addStep: (step) => set((state) => ({ steps: [...state.steps, step] })),
  updateStepPosition: (id, position) =>
    set((state) => ({
      steps: state.steps.map((step) =>
        step.id === id ? { ...step, position } : step
      ),
    })),
  updateStepConfig: (id, config) =>
    set((state) => ({
      steps: state.steps.map((step) =>
        step.id === id
          ? { ...step, config: { ...step.config, ...config } }
          : step
      ),
    })),
  addConnection: (connection) =>
    set((state) => ({ connections: [...state.connections, connection] })),
  removeStep: (id) =>
    set((state) => ({
      steps: state.steps.filter((step) => step.id !== id),
      connections: state.connections.filter(
        (conn) => conn.sourceId !== id && conn.targetId !== id
      ),
    })),
  removeConnection: (id) =>
    set((state) => ({
      connections: state.connections.filter((conn) => conn.id !== id),
    })),
}));
