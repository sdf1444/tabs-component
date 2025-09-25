// Manages multiple TabPanel components. 
// Ensures only the currently selected panel is visible, using index matching.

import React from "react";
import { type TabPanelsProps, type TabPanelProps } from "../../types/types";

export const TabPanels: React.FC<TabPanelsProps> = ({
  children,
  selectedIndex,
}) => {
  return (
    <div className="tab-panels">
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement<TabPanelProps>(child)) return null;

        return React.cloneElement(child, {
          isSelected: index === selectedIndex,
          index,
        });
      })}
    </div>
  );
};

TabPanels.displayName = "TabPanels";