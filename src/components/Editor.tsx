'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Header from './Header';
import Toolbox from './Toolbox';
import TabSwitcher from './TabSwitcher';
import Sidebar from './Sidebar';
import { defaultMarkdown } from '@/utils/defaultContent';
import { useMarkdownActions } from '@/hooks/useMarkdownActions';

const MarkdownPreview = dynamic(() => import('./MarkdownPreview'), { ssr: false });

export default function Editor() {
  const [markdown, setMarkdown] = React.useState(defaultMarkdown);
  const [activeTab, setActiveTab] = React.useState<'edit' | 'preview'>('edit');
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  
  const { handleToolAction, handleFileImport, handleExport } = useMarkdownActions(markdown, setMarkdown, textareaRef);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex-1 flex flex-col">
        <Header onImport={handleFileImport} onExport={handleExport} />
        <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="flex-1 p-4">
          <div className="h-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 h-full divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {/* Editor Panel */}
              <div className={`h-full flex flex-col ${activeTab === 'edit' || 'hidden sm:block'}`}>
                <Toolbox onAction={handleToolAction} />
                <textarea
                  ref={textareaRef}
                  value={markdown}
                  onChange={(e) => setMarkdown(e.target.value)}
                  className="flex-1 w-full p-4 font-mono text-sm bg-gray-50 focus:bg-white focus:outline-none resize-none"
                  placeholder="Enter markdown here..."
                />
              </div>

              {/* Preview Panel */}
              <div className={`h-full ${activeTab === 'preview' || 'hidden sm:block'}`}>
                <MarkdownPreview content={markdown} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}