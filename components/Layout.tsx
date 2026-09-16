import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

/**
 * Compatibility wrapper for the older page components.
 * The root app/layout.tsx already renders the global Header and Footer,
 * so this component intentionally does not render them a second time.
 */
export default function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}
