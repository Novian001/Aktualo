import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "link";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  loading?: boolean;
}

const variantStyles = {
  primary:
    "bg-[var(--accent)] text-[var(--accent-fg)] hover:opacity-90 active:scale-[0.98] shadow-sm",
  secondary:
    "bg-[var(--bg-muted)] text-[var(--fg)] hover:bg-[var(--border)] active:scale-[0.98]",
  ghost:
    "bg-transparent text-[var(--fg)] hover:bg-[var(--bg-muted)] active:scale-[0.98]",
  outline:
    "border border-[var(--border)] bg-transparent text-[var(--fg)] hover:bg-[var(--bg-muted)] active:scale-[0.98]",
  link: "bg-transparent text-[var(--fg-inverse)] underline-offset-4 hover:underline p-0 h-auto",
};

const sizeStyles = {
  sm: "h-8 px-3 text-xs gap-1.5",
  md: "h-10 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        aria-busy={loading}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-full",
          "transition-all duration-150 ease-out cursor-pointer select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-fg focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <span
              className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
              aria-hidden="true"
            />
            <span className="sr-only">Loading</span>
            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";
