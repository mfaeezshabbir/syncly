'use client';

import React from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Canvas } from '@/components/Canvas';

export default function WorkflowEditor() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <Sidebar />
        <main className="flex-1 bg-gray-50 dark:bg-gray-900">
          <div className="p-6 h-full">
            <Canvas />
          </div>
        </main>
      </div>
    </div>
  );
}
