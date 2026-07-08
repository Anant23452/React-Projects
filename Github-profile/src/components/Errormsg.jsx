import React from 'react';

export default function Errormsg({ error }) {
  if (!error) return null;

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-4 rounded-lg border border-red-200 bg-red-50 flex items-center justify-center gap-4">
      {/* Icon */}
      <div className="flex-shrink-0">
        <svg 
          className="w-6 h-6 text-red-600" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
          />
        </svg>
      </div>
      
      {/* Message */}
      <div className="flex-1">
        <h3 className="text-red-800 font-bold text-lg">Error Occurred</h3>
        <p className="text-red-700 text-sm mt-0.5">{error}</p>
      </div>
    </div>
  );
}