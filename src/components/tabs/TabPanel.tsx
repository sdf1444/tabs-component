// Content container for a single tab. 
// Handles visibility (shown when selected, hidden otherwise) and supports list or grid layouts.

import React,{ type ReactNode } from "react";

export type TabPanelProps = {
  children?: React.ReactNode;      // custom content
  isSelected?: boolean;            // whether this panel is visible
  index?: number;                  // for aria attributes
  layout?: "list" | "grid";        // content layout type
  content?: ReactNode;             // optional structured data
};

export const TabPanel: React.FC<TabPanelProps> = ({
  children,
  isSelected = false,
  index,
  layout = "list",
  content,
}) => {
  const classNames = [
    "tab-panel",
    layout,
    !isSelected ? "tab-panel--hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      role="tabpanel"
      id={index !== undefined ? `tabpanel-${index}` : undefined}
      aria-labelledby={index !== undefined ? `tab-${index}` : undefined}
      aria-hidden={!isSelected}
      hidden={!isSelected}
      className={classNames}
    >
      {Array.isArray(content) ? (
        layout === "list" ? (
          <ul>
            {content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          content.map((item, i) => <div key={i}>{item}</div>)
        )
      ) : (
        children
      )}
    </div>
  );
};

TabPanel.displayName = "TabPanel";