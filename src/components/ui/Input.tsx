import React from 'react';

type InputProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={inputId} className="text-caption text-steel">
        {label} {props.required && <span className="text-bronze">*</span>}
      </label>
      <input
        id={inputId}
        className={`bg-graphite-light border border-steel/30 rounded-sm px-4 py-3 text-warmwhite text-body placeholder:text-steel/50 focus:border-bronze focus:outline-none transition-colors duration-150 ${
          error ? 'border-error' : ''
        } ${className ?? ''}`}
        {...props}
      />
      {error && <span className="text-caption text-error">{error}</span>}
    </div>
  );
}