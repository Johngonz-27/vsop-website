"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "light"
  | "dark"
  | "text";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-[40px] px-4 text-[11px]",
  md: "",
  lg: "min-h-[54px] px-7 text-[12px]",
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  outline: "btn btn-outline",
  light: "btn btn-light",

  dark: "btn bg-[var(--school-primary-strong)] text-white hover:bg-[var(--school-primary)]",

  text: "btn min-w-0 bg-transparent px-0 text-[var(--school-text)] hover:text-[var(--school-primary)]",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const styles = [
    variantStyles[variant],
    sizeStyles[size],
    disabled ? "pointer-events-none cursor-not-allowed opacity-50" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = <span>{children}</span>;

  if (href) {
    return (
      <Link
        href={href}
        className={styles}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        onClick={disabled ? (event) => event.preventDefault() : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={styles}
    >
      {content}
    </button>
  );
}
