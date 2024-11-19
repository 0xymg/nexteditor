'use client';

import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  FolderOpen,
  Settings,
  FileEdit,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <div
      className={`bg-white border-r border-gray-200 transition-all duration-300 flex flex-col ${
        isOpen ? 'w-64' : 'w-16'
      }`}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileEdit className="h-6 w-6 text-blue-600 flex-shrink-0" />
            <span
              className={`font-semibold text-gray-900 truncate transition-opacity duration-200 ${
                isOpen ? 'opacity-100' : 'opacity-0 w-0'
              }`}
            >
              EditorMD.
            </span>
          </div>
          <button
            onClick={onToggle}
            className="p-1 hover:bg-gray-100 rounded-md text-gray-500 hover:text-gray-700 transition-colors"
          >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <div className="p-2">
          <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
            <FileText size={18} className="flex-shrink-0" />
            <span
              className={`transition-opacity duration-200 ${
                isOpen ? 'opacity-100' : 'opacity-0 w-0'
              }`}
            >
              New Document
            </span>
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
            <FolderOpen size={18} className="flex-shrink-0" />
            <span
              className={`transition-opacity duration-200 ${
                isOpen ? 'opacity-100' : 'opacity-0 w-0'
              }`}
            >
              Open Folder
            </span>
          </button>
        </div>
      </nav>

      <div className="p-2 border-t border-gray-200">
        <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
          <Settings size={18} className="flex-shrink-0" />
          <span
            className={`transition-opacity duration-200 ${
              isOpen ? 'opacity-100' : 'opacity-0 w-0'
            }`}
          >
            Settings
          </span>
        </button>
      </div>
    </div>
  );
}
