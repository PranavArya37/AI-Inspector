
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="text-center my-12">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
        <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">Is Your Image Real or AI?</span>
      </h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400">
        Upload an image and our advanced AI will analyze it for tell-tale signs of artificial generation. Get a confidence score and a detailed report in seconds.
      </p>
    </div>
  );
};
