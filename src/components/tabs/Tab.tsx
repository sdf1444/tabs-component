// A single tab button component with optional badge support.
// Handles selected, focus, hover, and active states with accessibility attributes.

import React from "react";
import { Badge } from "./Badge";
import { type TabProps } from "../../types/types";

export const Tab: React.FC<TabProps> = ({
  label,
  badgeContent,
  badgeVariant = "neutral",
  isSelected = false,
  onSelect,
  index,
  className = "",
  disabled = false,
}) => {
  if (!label) return null;

  const tabId = index !== undefined ? `tab-${index}` : undefined;
  const panelId = index !== undefined ? `tabpanel-${index}` : undefined;

  return (
    <button
      role="tab"
      aria-selected={isSelected}
      aria-controls={panelId}
      id={tabId}
      className={`tab ${isSelected ? "tab-selected" : ""} ${className}`}
      onClick={disabled ? undefined : onSelect}
      disabled={disabled}
      type="button"
    >
      <span>{label}</span>
      {badgeContent !== undefined && badgeContent !== "" && (
        <Badge content={badgeContent} variant={badgeVariant} />
      )}
    </button>
  );
};

Tab.displayName = "Tab";