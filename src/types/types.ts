/**
 * Shared types for the Tabs component system.
 * These are used across multiple components (Tab, TabList, Badge, etc.).
 */

import { type ReactElement, type ReactNode } from "react"

/* ===========================
   Variants
   =========================== */

/** Visual style variant for tabs */
export type TabVariant = "pill" | "underline";

/** Badge color/intent variants */
export type BadgeVariant = "neutral" | "positive" | "negative";

/** Layout options for TabPanel */
export type TabLayout = "list" | "grid";

/* ===========================
   Props
   =========================== */

/** Props for a Badge */
export type BadgeProps = {
  content?: string | number;  // text or number inside the badge
  variant?: BadgeVariant;     // style (neutral/positive/negative)
  ariaLabel?: string;         // optional accessible label
};

/** Props for Tab panels */
export type TabPanelsProps = {
  children: ReactElement<TabPanelProps>[]; // tab panels
  selectedIndex: number;                   // current active panel
};

/** Props for a Tab panel */
export type TabPanelProps = {
  children?: React.ReactNode;      // custom content
  isSelected?: boolean;            // whether this panel is visible
  index?: number;                  // for aria attributes
  layout?: "list" | "grid";        // content layout type
  content?: ReactNode;             // optional structured data
};

/** Props for a single Tab component */
export type TabProps = {
  label: string;                    // text shown inside the tab
  badgeContent?: string | number;   // optional badge value
  badgeVariant?: BadgeVariant;      // badge style
  isSelected?: boolean;             // whether tab is currently selected
  onSelect?: () => void;            // click handler
  index?: number;                   // tab index (for aria attributes)
  className?: string;               // extra classes (storybook/testing)
  disabled?: boolean;               // disabled state
};

/** Props for the TabList container */
export type TabListProps = {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];  // expects Tab components
  selectedIndex: number;                                                    // currently selected tab index
  setSelectedIndex?: (i: number) => void;                                   // callback to update selected tab
  variant?: TabVariant;                                                     // visual style (pill | underline)
};

export interface TabData {
  label: string;
  badgeContent?: string;
  badgeVariant?: BadgeVariant;
  layout: TabLayout;
  content?: React.ReactNode;
}