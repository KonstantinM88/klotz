import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  showArrow?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  showArrow = true,
}: ButtonLinkProps) {
  return (
    <Link
      className={`button button--${variant} ${className}`.trim()}
      href={href}
    >
      <span>{children}</span>
      {showArrow ? <ArrowRightIcon className="button__icon" /> : null}
    </Link>
  );
}
