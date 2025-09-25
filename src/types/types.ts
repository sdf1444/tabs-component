/**
 * Shared types for the Tabs component system.
 * These are used across multiple components (Tab, TabList, Badge, etc.).
 */

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