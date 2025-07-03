import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Syncly - Visual Workflow Builder',
  description: 'Design and automate your workflows with drag-and-drop simplicity.',
};

export default function WorkflowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {children}
    </div>
  );
}
