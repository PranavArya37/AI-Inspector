
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ImageUploader } from './components/ImageUploader';
import { AnalysisResult } from './components/AnalysisResult';
import { LoadingSpinner } from './components/LoadingSpinner';
import { analyzeImage } from './services/geminiService';
import type { AnalysisResult as AnalysisResultType } from './types';

function App() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResultType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        // remove data:image/jpeg;base64, prefix
        resolve(result.split(',')[1]);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageUpload = useCallback(async (file: File) => {
    if (!file) return;

    setImageFile(file);
    setImagePreviewUrl(URL.createObjectURL(file));
    setIsLoading(true);
    setAnalysisResult(null);
    setError(null);

    try {
      const base64Image = await fileToBase64(file);
      const result = await analyzeImage(base64Image, file.type);
      setAnalysisResult(result);
    } catch (err) {
      setError('Failed to analyze the image. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleReset = useCallback(() => {
    setImageFile(null);
    setImagePreviewUrl(null);
    setAnalysisResult(null);
    setIsLoading(false);
    setError(null);
    if(imagePreviewUrl) {
      URL.revokeObjectURL(imagePreviewUrl);
    }
  }, [imagePreviewUrl]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-16">
        {!analysisResult && !isLoading && !imageFile && (
           <>
            <Hero />
            <ImageUploader onImageUpload={handleImageUpload} disabled={isLoading} />
           </>
        )}
        
        {isLoading && (
          <div className="flex flex-col items-center justify-center text-center p-8 bg-slate-800/50 rounded-lg">
            {imagePreviewUrl && <img src={imagePreviewUrl} alt="Analysis subject" className="max-h-64 rounded-lg mb-6 shadow-lg"/>}
            <LoadingSpinner />
            <p className="text-xl mt-4 text-slate-300 animate-pulse">Our AI is inspecting your image...</p>
            <p className="text-slate-400">This may take a moment.</p>
          </div>
        )}

        {error && (
            <div className="text-center p-8 bg-red-900/50 border border-red-700 rounded-lg">
                <p className="text-2xl text-red-300 mb-4">An Error Occurred</p>
                <p className="text-red-400 mb-6">{error}</p>
                <button
                    onClick={handleReset}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
                >
                    Try Again
                </button>
            </div>
        )}

        {analysisResult && imagePreviewUrl && (
          <AnalysisResult 
            result={analysisResult} 
            imagePreviewUrl={imagePreviewUrl} 
            onReset={handleReset} 
          />
        )}
        
        <div className="mt-24 space-y-24">
            <HowItWorks />
            <Features />
            <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
