import React from 'react';

export const Badge = ({
  children,
  variant = 'default', // default | available | occupied | reserved | brand | cyan
  size = 'md',
  className = '',
  icon: Icon
}) => {
  const base = "inline-flex items-center font-medium rounded-full tracking-wide";

  const variants = {
    default: "bg-slate-100 text-slate-700 border border-slate-200",
    available: "badge-available",
    occupied: "badge-occupied",
    reserved: "badge-reserved",
    brand: "bg-brand-50 text-brand-700 border border-brand-200",
    cyan: "bg-cyan-50 text-cyan-800 border border-cyan-200",
    dark: "bg-slate-800 text-slate-200 border border-slate-700",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs gap-1",
    md: "px-3 py-1 text-xs gap-1.5",
    lg: "px-3.5 py-1.5 text-sm gap-2",
  };

  return (
    <span className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {children}
    </span>
  );
};
