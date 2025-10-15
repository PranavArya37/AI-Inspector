
import React from 'react';
import { UploadCloudIcon } from './icons/UploadCloudIcon';
import { CpuChipIcon } from './icons/CpuChipIcon';
import { ChartBarIcon } from './icons/ChartBarIcon';

const steps = [
  {
    icon: <UploadCloudIcon className="w-10 h-10 mb-4 text-cyan-400" />,
    title: '1. Upload Image',
    description: 'Select or drag and drop an image you want to analyze. We support JPG, PNG, and WEBP formats.',
  },
  {
    icon: <CpuChipIcon className="w-10 h-10 mb-4 text-cyan-400" />,
    title: '2. AI Analysis',
    description: 'Our sophisticated AI model examines the image for subtle artifacts and patterns typical of AI generation.',
  },
  {
    icon: <ChartBarIcon className="w-10 h-10 mb-4 text-cyan-400" />,
    title: '3. Get Results',
    description: 'Receive a confidence score and a detailed explanation of the findings in a comprehensive report.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        <p className="text-slate-400 mt-2">A simple, three-step process to verify your images.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {steps.map((step, index) => (
          <div key={index} className="bg-slate-800/50 p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300">
            {step.icon}
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-slate-400">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
