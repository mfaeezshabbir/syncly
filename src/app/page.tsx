import { Canvas } from "@/components/Canvas";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      <main className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Syncly Workflow Builder</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Design and automate your workflows with drag-and-drop simplicity
          </p>
        </div>
        <div className="h-[calc(100vh-160px)]">
          <Canvas />
        </div>
      </main>
    </div>
  );
}
