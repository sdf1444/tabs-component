// Storybook stories for the Tabs component.
// Includes interactive variant (with controls)
// and static States to showcase all Figma design states.

import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TabList } from "../components/tabs/TabList";
import { Tab } from "../components/tabs/Tab";
import { TabPanels } from "../components/tabs/TabPanels";
import { TabPanel } from "../components/tabs/TabPanel";
import { tabsData } from "../data/tabsData";
import "../components/tabs/tabs.scss";
import "./storybook-states.scss";

const meta: Meta = {
  title: "Components/Tabs",
  tags: ["autodocs"],
};

export default meta;

/* ===============================
   Shared Interactive Tabs
================================ */
const InteractiveTabs = ({ variant }: { variant: "pill" | "underline" }) => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <TabList
        variant={variant}
        selectedIndex={selected}
        setSelectedIndex={setSelected}
      >
        {tabsData.map((tab, i) => (
          <Tab
            key={i}
            label={tab.label}
            badgeContent={tab.badgeContent}
            badgeVariant={tab.badgeVariant as any}
            isSelected={selected === i}
            onSelect={() => setSelected(i)}
          />
        ))}
      </TabList>
      <TabPanels selectedIndex={selected}>
        {tabsData.map((tab, i) => (
          <TabPanel
            key={i}
            layout={tab.layout as "list" | "grid"}
            content={tab.content}
          />
        ))}
      </TabPanels>
    </>
  );
};

/* ===============================
   Interactive (variant via controls)
================================ */
type InteractiveTabsProps = { variant: "pill" | "underline" };
type InteractiveStory = StoryObj<InteractiveTabsProps>;

export const Interactive: InteractiveStory = {
  args: {
    variant: "pill",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["pill", "underline"],
    },
  },
  render: ({ variant }) => <InteractiveTabs variant={variant} />,
};

/* ===============================
   Helper: Static States Renderer
================================ */
const StaticStateTabs = ({
  variant,
  selected,
  stateLabels,
  selectedClass,
  unselectedClass,
}: {
  variant: "pill" | "underline";
  selected: boolean;
  stateLabels: string[];
  selectedClass: (i: number) => string | undefined;
  unselectedClass: (i: number) => string | undefined;
}) => (
  <TabList
    variant={variant}
    selectedIndex={selected ? 0 : -1}
    setSelectedIndex={() => {}}
  >
    {stateLabels.map((label, i) => (
      <Tab
        key={i}
        label={label}
        isSelected={selected}
        className={selected ? selectedClass(i) : unselectedClass(i)}
      />
    ))}
  </TabList>
);

/* ===============================
   Static States (design showcase)
   Matches Figma: Selected True/False
================================ */
export const States: StoryObj = {
  parameters: { controls: { disable: true } },
  render: () => {
    const stateLabels = ["Default", "Hover", "Active", "Focus"];

    const unselectedClass = (i: number) =>
      ["storybook-default", "storybook-hover", "storybook-active", "storybook-focus"][i];

    const selectedClass = (i: number) =>
      [
        "storybook-selected-default",
        "storybook-selected-hover",
        "storybook-selected-active",
        "storybook-selected-focus",
      ][i];

    return (
      <div>
        {(["pill", "underline"] as const).map((variant) => (
          <section key={variant}>
            <h3>{variant[0].toUpperCase() + variant.slice(1)} Variant</h3>

            <h4>Selected</h4>
            <StaticStateTabs
              variant={variant}
              selected
              stateLabels={stateLabels}
              selectedClass={selectedClass}
              unselectedClass={unselectedClass}
            />

            <h4>Unselected</h4>
            <StaticStateTabs
              variant={variant}
              selected={false}
              stateLabels={stateLabels}
              selectedClass={selectedClass}
              unselectedClass={unselectedClass}
            />
          </section>
        ))}
      </div>
    );
  },
};