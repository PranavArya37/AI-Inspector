
import React from 'react';
import type { AnalysisResult as AnalysisResultType } from '../types';
import { CircularProgress } from './CircularProgress';

interface AnalysisResultProps {
  result: AnalysisResultType;
  imagePreviewUrl: string;
  onReset: () => void;
}

export const AnalysisResult: React.FC<AnalysisResultProps> = ({ result, imagePreviewUrl, onReset }) => {
  const { is_ai_generated, confidence_score, analysis_report } = result;

  const verdictText = is_ai_generated ? 'Likely AI-Generated' : 'Likely Human-Made';
  const verdictColor = is_ai_generated ? 'text-orange-400' : 'text-green-400';
  const progressColor = is_ai_generated ? 'orange' : 'green';

  return (
    <div className="bg-slate-800/50 rounded-lg p-6 md:p-10 shadow-2xl animate-fade-in">
      <h2 className="text-3xl font-bold text-center mb-8">Analysis Complete</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center">
          <img src={imagePreviewUrl} alt="Analyzed" className="rounded-lg shadow-lg max-h-96 object-contain mb-6" />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 bg-slate-900/40 p-6 rounded-lg">
            <CircularProgress progress={confidence_score} color={progressColor} />
            <div className="text-center sm:text-left">
              <p className="text-slate-400 text-lg">Verdict</p>
              <p className={`text-4xl font-bold ${verdictColor}`}>{verdictText}</p>
            </div>
          </div>

          <div className="bg-slate-900/40 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-slate-200">Detailed Report</h3>
            <p className="text-slate-300 whitespace-pre-wrap leading-relaxed">{analysis_report}</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <button
          onClick={onReset}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105"
        >
          Analyze Another Image
        </button>
      </div>
    </div>
  );
};
