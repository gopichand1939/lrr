import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  to,
  href,
  variant = 'primary', // primary | secondary | outline | ghost | dark
  size = 'md', // sm | md | lg
  className = '',
  icon: Icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary: "bg-brand-600 hover:bg-brand-700 text-white shadow-md hover:shadow-lg focus:ring-brand-500 active:scale-[0.98]",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-lg focus:ring-slate-900 active:scale-[0.98]",
    cyan: "bg-accent-cyan hover:bg-accent-cyanHover text-slate-950 font-bold shadow-md hover:shadow-lg focus:ring-accent-cyan active:scale-[0.98]",
    outline: "bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 hover:border-slate-400 focus:ring-brand-500",
    ghost: "bg-transparent hover:bg-slate-100 text-slate-700 focus:ring-slate-400",
    dark: "bg-slate-800/90 hover:bg-slate-800 text-white border border-slate-700 focus:ring-slate-700",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
