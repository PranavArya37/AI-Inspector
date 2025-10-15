
import React from 'react';
import { EyeIcon } from './icons/EyeIcon';

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-700/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <EyeIcon className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              AI Inspector
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
