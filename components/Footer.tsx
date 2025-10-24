import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 mt-24">
      <div className="container mx-auto px-4 py-6 text-center text-slate-500">
        <p>
          &copy; 2025 AI Inspector -{' '}
          <a
            href="https://pranavarya.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Pranav Arya
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};
