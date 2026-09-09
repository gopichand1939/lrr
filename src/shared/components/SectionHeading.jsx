import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = ''
}) => {
  return (
    <div className={`mb-12 sm:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
          dark 
            ? 'bg-brand-900/60 text-brand-300 border border-brand-700/50' 
            : 'bg-brand-50 text-brand-700 border border-brand-200'
        }`}>
          {badge}
        </div>
      )}
      
      {title && (
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
          dark ? 'text-white' : 'text-slate-900'
        }`}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          dark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
