// Manages multiple TabPanel components. 
// Ensures only the currently selected panel is visible, using index matching.

import React, { type ReactElement } from "react";
import { type TabPanelProps } from "./TabPanel";

export type TabPanelsProps = {
  children: ReactElement<TabPanelProps>[]; // tab panels
  selectedIndex: number;                   // current active panel
};

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