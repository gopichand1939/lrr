import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, BookOpen } from 'lucide-react';
import { Button } from '../../shared/components/Button';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 bg-slate-50">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto shadow-md">
          <BookOpen className="w-10 h-10" />
        </div>

        <div>
          <span className="text-6xl font-black text-slate-900 tracking-tight block">404</span>
          <h1 className="text-2xl font-bold text-slate-800 mt-2">Page Not Found</h1>
          <p className="text-sm text-slate-500 mt-2">
            The study section or page you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="pt-2 flex items-center justify-center gap-3">
          <Button to="/" variant="primary" icon={Home}>
            Return to Home
          </Button>
          <Button to="/seats" variant="outline" icon={Search}>
            View Seats
          </Button>
        </div>
      </div>
    </div>
  );
};
