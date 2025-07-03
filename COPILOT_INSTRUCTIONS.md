# Copilot Instructions for Syncly

Welcome to the Syncly codebase! These instructions are designed to help GitHub Copilot and other AI assistants provide meaningful, context-aware suggestions and support throughout the repository.

---

## 🛠️ Project Overview

**Syncly** is a visual, AI-powered workflow builder enabling users to design, configure, and execute custom automation workflows via a drag-and-drop interface. Built with TypeScript, Next.js, and Tailwind CSS, it leverages AI for template suggestions and smart configuration.

---

## 💡 Copilot Guidelines

### General Coding Practices

- Use **TypeScript** for all components, utilities, and business logic.
- Follow **React functional component** patterns.
- Style using **Tailwind CSS** utility classes.
- Maintain a **clean, modular file structure**; prefer atomic, reusable components.

### UI/UX

- Use the `'Roboto'` font for typography.
- Prioritize accessibility (a11y) and keyboard navigation.
- Ensure drag-and-drop actions are intuitive and visually indicated.
- Use consistent iconography (line icons related to automation and workflow).

### Workflow Features

- Implement drag-and-drop with visual feedback on the canvas.
- Allow users to configure steps via side panels or modals.
- Support connecting steps to define order, branching, and looping.
- Enable saving, editing, and running workflows.
- Integrate AI (Gemini/Genkit) for template suggestions and smart configuration.

### State and Data

- Use **React context** or **Redux** for workflow state management.
- Represent workflows as JSON objects with nodes, connections, and metadata.
- Support workflow persistence (save/load/version) via backend APIs.

### AI & Automation

- Provide endpoints/components for AI-powered template suggestion.
- Implement helper functions for AI to analyze workflow patterns and suggest improvements.

### Testing

- Write unit and integration tests using **Jest** and **React Testing Library**.
- Ensure drag-and-drop, workflow execution, and AI suggestions are tested.

---

## 🤖 Copilot Prompt Examples

- “Suggest a React component for a draggable workflow step with Tailwind styling.”
- “How can I connect two workflow steps visually?”
- “Add a feature to allow conditional branching in the workflow.”
- “Integrate Gemini/Genkit to suggest workflow templates based on user input.”

---

## 📁 File/Folder Conventions

- `components/` — UI components (DragDropCanvas, WorkflowStep, Sidebar, etc.)
- `hooks/` — Custom React hooks (useWorkflow, useStepConfig, etc.)
- `utils/` — Utility functions (workflow serialization, validation, etc.)
- `pages/` — Next.js pages
- `styles/` — Global styles and Tailwind config
- `ai/` — AI integration helpers (template suggestion, step recommendations)
- `tests/` — Test files

---

## 📝 Code Style

- Use ES6+ syntax and features.
- Write clear, self-documenting code and include JSDoc/TSDoc comments for complex logic.
- Use functional programming paradigms where possible.

---

## 🗣️ Collaboration

- Leave TODOs and FIXMEs in code for unfinished features or known issues.
- Write clear commit messages and PR descriptions.
- Use GitHub issues for feature requests and bug reports.

---

## 🚦 When in Doubt

- Prefer clarity and user experience.
- Suggest improvements for workflow logic, UI/UX, and AI integrations.
- Ask for clarification in comments if requirements are ambiguous.

---

Thank you for contributing to Syncly!