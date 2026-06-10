import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
} & React.ComponentPropsWithoutRef<'button'> & React.ComponentPropsWithoutRef<'a'>;

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-graphite/30 dark:focus:ring-warmwhite/30";

  const variantClasses = {
    primary:
      "bg-graphite text-warmwhite dark:bg-white dark:text-graphite rounded-md hover:bg-graphite-light dark:hover:bg-steel-light active:bg-graphite/90 dark:active:bg-warmwhite/90 shadow-btn-hover disabled:opacity-40",
    secondary:
      "bg-transparent border border-graphite dark:border-warmwhite text-graphite dark:text-warmwhite rounded-md hover:bg-graphite/10 dark:hover:bg-warmwhite/10 active:bg-graphite/20 dark:active:bg-warmwhite/20",
    ghost:
      "bg-transparent text-steel border border-steel/30 rounded-md hover:text-graphite dark:hover:text-warmwhite hover:border-graphite/30 dark:hover:border-warmwhite/30",
  };

  const sizeClasses = {
    sm: "h-8 px-4 text-xs",
    md: "h-11 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  };

  const Comp = href ? "a" : "button";

  return (
    <Comp
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className ?? ""}`}
      {...props}
    >
      {children}
    </Comp>
  );
}
