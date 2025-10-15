
import React from 'react';
import { TargetIcon } from './icons/TargetIcon';
import { DocumentTextIcon } from './icons/DocumentTextIcon';
import { ImageIcon } from './icons/ImageIcon';

const features = [
  {
    icon: <TargetIcon className="w-10 h-10 mb-4 text-purple-400" />,
    title: 'High Accuracy',
    description: 'Leverages a state-of-the-art deep learning model for reliable detection of AI-generated content.',
  },
  {
    icon: <DocumentTextIcon className="w-10 h-10 mb-4 text-purple-400" />,
    title: 'Detailed Reports',
    description: 'Goes beyond a simple score, providing insights into why an image is flagged for being AI-generated.',
  },
  {
    icon: <ImageIcon className="w-10 h-10 mb-4 text-purple-400" />,
    title: 'Supports Major Formats',
    description: 'Analyze JPG, PNG, and WEBP images with ease, covering the most common formats used today.',
  },
];

export const Features: React.FC = () => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Key Features</h2>
        <p className="text-slate-400 mt-2">Discover what makes AI Inspector the best choice.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {features.map((feature, index) => (
          <div key={index} className="bg-slate-800/50 p-8 rounded-lg border border-transparent hover:border-purple-500 transition-colors duration-300">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
