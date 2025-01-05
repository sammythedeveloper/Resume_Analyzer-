"use client";
// components/UploadForm.tsx
import React, { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('resume', file);

      // Replace with your backend API URL
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('Analysis Result:', data);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-4xl font-bold mb-4">Upload Your Resume</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          onChange={handleFileChange}
          className="border p-2 rounded-md w-full"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Analyze Resume
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
