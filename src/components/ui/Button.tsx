import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  // کلاس‌های پایه
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-bronze';

  // variant‌ها
  const variantClasses = {
    primary:
      'bg-bronze text-warmwhite rounded-full hover:bg-bronze-hover active:bg-bronze-active shadow-btn-hover disabled:opacity-40 disabled:hover:bg-bronze',
    secondary:
      'bg-transparent border border-bronze text-warmwhite rounded-sm hover:bg-bronze/10 active:bg-bronze/20',
    ghost:
      'bg-transparent text-steel border border-steel/30 rounded-sm hover:text-warmwhite hover:border-warmwhite/30',
  };

  // sizeها
  const sizeClasses = {
    sm: 'h-8 px-4 text-xs',
    md: 'h-11 px-6 text-sm',
    lg: 'h-14 px-8 text-base',
  };

  // اگر href داشته باشه از <a> استفاده کن
  const Comp = href ? 'a' : 'button';

  return (
    <Comp
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className ?? ''}`}
      {...(props as any)}
    >
      {children}
    </Comp>
  );
}