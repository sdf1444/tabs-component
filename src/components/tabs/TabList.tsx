// Wrapper for Tab components. 
// Applies the chosen visual variant (pill | underline) and manages selection state.

import React, { type KeyboardEvent } from "react";
import { type TabListProps } from "../../types/types";

export const TabList: React.FC<TabListProps> = ({
  children,
  selectedIndex,
  setSelectedIndex,
  variant = "pill",
}) => {
  const variantClass =
    variant === "underline" ? "tab-list underline" : "tab-list";

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!setSelectedIndex || !React.Children.count(children)) return;

    const count = React.Children.count(children);
    let nextIndex = selectedIndex;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (selectedIndex + 1) % count;
        break;
      case "ArrowLeft":
        nextIndex = (selectedIndex - 1 + count) % count;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = count - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setSelectedIndex(nextIndex);
  };

  return (
    <div
      role="tablist"
      className={variantClass}
      onKeyDown={handleKeyDown}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const isSelected =
          child.props.isSelected !== undefined
            ? child.props.isSelected
            : selectedIndex === index;

        return React.cloneElement(child, {
          isSelected,
          onSelect: child.props.onSelect ?? (() => setSelectedIndex?.(index)),
          index,
        });
      })}
    </div>
  );
};

TabList.displayName = "TabList";