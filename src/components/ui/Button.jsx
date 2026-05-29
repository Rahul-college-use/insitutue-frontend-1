import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';
  
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 py-4 px-8',
    secondary: 'bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 py-4 px-8',
    outline: 'border border-slate-300 text-slate-700 hover:bg-slate-50 py-2.5 px-5',
    ghost: 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50 py-2.5 px-5'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}