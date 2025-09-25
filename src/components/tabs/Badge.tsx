// A small label for counts or status indicators. 
// Supports neutral, positive, and negative variants.
// Includes defensive rendering and accessibility polish.

import React from "react";
import { type BadgeVariant } from "../../types/types";

export type BadgeProps = {
  content?: string | number;  // text or number inside the badge
  variant?: BadgeVariant;     // style (neutral/positive/negative)
  ariaLabel?: string;         // optional accessible label
};

export const Badge: React.FC<BadgeProps> = ({
  content,
  variant = "neutral",
  ariaLabel,
}) => {
  if (content === undefined || content === "" || content === null) {
    return null;
  }

  return (
    <span
      className={`badge badge--${variant}`}
      role="status"
      aria-label={ariaLabel ?? String(content)} // ensures screen readers read it
    >
      {content}
    </span>
  );
};

Badge.displayName = "Badge";
