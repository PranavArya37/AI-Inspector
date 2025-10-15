
import React, { useState, useRef, useCallback } from 'react';
import { UploadCloudIcon } from './icons/UploadCloudIcon';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  disabled: boolean;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/webp'];

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, disabled }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    setError(null);
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      setError('File is too large. Max size is 10MB.');
      return;
    }

    if (!SUPPORTED_FORMATS.includes(file.type)) {
      setError('Unsupported file format. Please use JPG, PNG, or WEBP.');
      return;
    }

    onImageUpload(file);
  }, [onImageUpload]);

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (disabled) return;

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  };
  
  const openFileDialog = () => {
    if (fileInputRef.current) {
        fileInputRef.current.click();
    }
  };


  return (
    <div className="max-w-3xl mx-auto">
        <div
        onClick={openFileDialog}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
        className={`relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer transition-colors duration-300
        ${disabled ? 'bg-slate-800/50 border-slate-700 cursor-not-allowed' : 'bg-slate-800 border-slate-600 hover:bg-slate-700/50 hover:border-cyan-500'}
        ${isDragging ? 'bg-cyan-900/50 border-cyan-400' : ''}`}
        >
        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
            <UploadCloudIcon className={`w-12 h-12 mb-4 transition-colors ${isDragging ? 'text-cyan-300' : 'text-slate-400'}`} />
            <p className={`mb-2 text-lg font-semibold ${isDragging ? 'text-white' : 'text-slate-300'}`}>
            Drag & drop an image here, or <span className="text-cyan-400">click to select</span>
            </p>
            <p className="text-sm text-slate-500">
            Max file size: 10MB. Supported formats: JPG, PNG, WEBP.
            </p>
        </div>
        <input 
            ref={fileInputRef} 
            type="file" 
            className="hidden" 
            onChange={onFileSelect} 
            accept={SUPPORTED_FORMATS.join(',')}
            disabled={disabled}
        />
        </div>
        {error && <p className="mt-4 text-center text-red-400">{error}</p>}
    </div>
  );
};
