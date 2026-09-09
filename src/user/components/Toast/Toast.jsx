import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export const Toast = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className={`flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl border text-sm font-semibold max-w-md ${
        type === 'success' 
          ? 'bg-slate-900 text-white border-slate-800' 
          : 'bg-rose-900 text-white border-rose-800'
      }`}>
        {type === 'success' ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        ) : (
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
        )}
        <span className="flex-1">{message}</span>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
