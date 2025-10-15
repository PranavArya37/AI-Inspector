
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 mt-24">
      <div className="container mx-auto px-4 py-6 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} AI Inspector. All rights reserved.</p>
        <p className="text-sm mt-1">Powered by Gemini AI</p>
      </div>
    </footer>
  );
};
