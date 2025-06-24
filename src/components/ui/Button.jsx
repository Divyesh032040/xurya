import React from 'react';

const Button = ({ children, className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full font-medium transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
