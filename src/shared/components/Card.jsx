import React from 'react';

export const Card = ({
  children,
  className = '',
  hover = true,
  dark = false,
  bordered = true,
  padding = 'p-6',
  onClick
}) => {
  const base = "rounded-2xl transition-all duration-300 relative overflow-hidden";
  const bg = dark 
    ? "bg-slate-900 text-white" 
    : "bg-white text-slate-800";
  const border = bordered 
    ? (dark ? "border border-slate-800" : "border border-slate-200/80") 
    : "";
  const shadow = dark 
    ? "shadow-lg shadow-black/20" 
    : "shadow-card";
  const hoverStyles = hover 
    ? "hover:shadow-card-hover hover:-translate-y-1" 
    : "";

  return (
    <div 
      className={`${base} ${bg} ${border} ${shadow} ${hoverStyles} ${padding} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
