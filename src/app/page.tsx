'use client';

import { Canvas } from "@/components/Canvas";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Syncly Workflow Builder
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Design and automate your workflows with drag-and-drop simplicity, powered by AI.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/workflow"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Create Workflow
            </a>
            <a
              href="#features"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div id="features" className="mt-32">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {[
              {
                title: 'Visual Workflow Builder',
                description: 'Design workflows through an intuitive drag-and-drop interface.',
                icon: '🎨'
              },
              {
                title: 'AI-Powered Assistance',
                description: 'Get intelligent suggestions for templates and configurations.',
                icon: '🤖'
              },
              {
                title: 'Real-time Collaboration',
                description: 'Work together with your team in real-time.',
                icon: '👥'
              },
              {
                title: 'Advanced Automation',
                description: 'Create complex workflows with conditions and loops.',
                icon: '⚡'
              },
              {
                title: 'Version Control',
                description: 'Track changes and roll back when needed.',
                icon: '📝'
              },
              {
                title: 'Extensible Platform',
                description: 'Add custom steps and integrate with your tools.',
                icon: '🔌'
              }
            ].map((feature) => (
              <div key={feature.title} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm ring-1 ring-gray-900/5">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
