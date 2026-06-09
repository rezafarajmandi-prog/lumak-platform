import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean; // فعال‌سازی افکت hover
};

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={`
        bg-graphite-light border border-steel/20 rounded-md overflow-hidden
        ${hover ? 'transition-all duration-200 ease-out hover:border-bronze/60 hover:bg-graphite-light/80 hover:shadow-card' : ''}
        ${className ?? ''}
      `}
    >
      {children}
    </div>
  );
}