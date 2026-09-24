import type { SVGProps } from "react";
import type { ProcessStep } from "@/domain/content/types";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps: IconProps = {
  "aria-hidden": true,
  fill: "none",
  focusable: "false",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.75,
  viewBox: "0 0 24 24",
};

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M21 16.6v2.5a1.8 1.8 0 0 1-2 1.8 17.8 17.8 0 0 1-7.8-2.8 17.4 17.4 0 0 1-5.4-5.4A17.8 17.8 0 0 1 3 4.9a1.8 1.8 0 0 1 1.8-2h2.5a1.8 1.8 0 0 1 1.8 1.5c.1 1 .4 1.9.7 2.8a1.8 1.8 0 0 1-.4 1.9L8.3 10.2a14.4 14.4 0 0 0 5.4 5.4l1.1-1.1a1.8 1.8 0 0 1 1.9-.4c.9.3 1.8.6 2.8.7a1.8 1.8 0 0 1 1.5 1.8Z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function ProcessIcon({
  name,
  ...props
}: IconProps & { name: ProcessStep["icon"] }) {
  if (name === "consulting") {
    return (
      <svg {...baseProps} {...props}>
        <path d="M7.5 17.5 3 20l1.2-4.3A7 7 0 1 1 7.5 17.5Z" />
        <path d="M14.7 16.8a6 6 0 0 0 3.8 1.3L22 20l-.9-3.3a5.6 5.6 0 0 0 1-3.2 6 6 0 0 0-5-5.9" />
      </svg>
    );
  }

  if (name === "measure") {
    return (
      <svg {...baseProps} {...props}>
        <path d="m4 18 14-14 2 2L6 20H4v-2Z" />
        <path d="m13 7 4 4M10 10l2 2M7 13l2 2" />
      </svg>
    );
  }

  if (name === "planning") {
    return (
      <svg {...baseProps} {...props}>
        <path d="M6 3h9l3 3v15H6V3Z" />
        <path d="M14 3v4h4M9 11h6M9 15h6" />
      </svg>
    );
  }

  if (name === "assembly") {
    return (
      <svg {...baseProps} {...props}>
        <path d="M14 6.5a4 4 0 0 0-5.2 5.2L3 17.5 6.5 21l5.8-5.8A4 4 0 0 0 17.5 10L15 12.5 11.5 9 14 6.5Z" />
      </svg>
    );
  }

  return (
    <svg {...baseProps} {...props}>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
