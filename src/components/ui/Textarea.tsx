import React from 'react';

type TextareaProps = {
  label: string;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ label, error, className, id, ...props }: TextareaProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={inputId} className="text-caption text-steel">{label}</label>
      <textarea
        id={inputId}
        className={`bg-graphite-light border border-steel/30 rounded-sm px-4 py-3 text-warmwhite text-body placeholder:text-steel/50 focus:border-bronze focus:outline-none transition-colors duration-150 resize-vertical ${
          error ? 'border-error' : ''
        } ${className ?? ''}`}
        rows={4}
        {...props}
      />
      {error && <span className="text-caption text-error">{error}</span>}
    </div>
  );
}