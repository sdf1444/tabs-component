// Storybook stories for the Tabs component.
// Includes interactive variants (Pill, Underline) 
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

const meta: Meta<typeof TabList> = {
  title: "Components/Tabs",
  component: TabList,
  tags: ["autodocs"],
  parameters: {
    controls: { disable: true }
  },
};

export default meta;
type Story = StoryObj<typeof TabList>;

/* ===============================
   Pill Variant (interactive)
================================ */
export const Pill: Story = {
  render: () => {
    const [selected, setSelected] = useState(0);
    return (
      <>
        <TabList
          variant="pill"
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
  },
};

/* ===============================
   Underline Variant (interactive)
================================ */
export const Underline: Story = {
  render: () => {
    const [selected, setSelected] = useState(0);
    return (
      <>
        <TabList
          variant="underline"
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
  },
};

/* ===============================
   Static States (design showcase)
   Matches Figma: Selected True/False
================================ */
export const States: Story = {
  parameters: { controls: { disable: true } }, // hide Controls for this story
  render: () => {
    const stateLabels = ["Default", "Hover", "Active", "Focus"];

    const unselectedClass = (i: number) =>
      i === 0
        ? "storybook-default"
        : i === 1
        ? "storybook-hover"
        : i === 2
        ? "storybook-active"
        : i === 3
        ? "storybook-focus"
        : undefined;

    const selectedClass = (i: number) =>
      i === 0
        ? "storybook-selected-default"
        : i === 1
        ? "storybook-selected-hover"
        : i === 2
        ? "storybook-selected-active"
        : i === 3
        ? "storybook-selected-focus"
        : undefined;

    return (
      <div>
        {/* Pill Variant */}
        <section>
          <h3>Pill Variant</h3>

          <h4>Selected</h4>
          <TabList variant="pill" selectedIndex={0} setSelectedIndex={() => {}}>
            {stateLabels.map((label, i) => (
              <Tab
                key={i}
                label={label}
                isSelected
                className={selectedClass(i)}
              />
            ))}
          </TabList>

          <h4>Unselected</h4>
          <TabList variant="pill" selectedIndex={-1} setSelectedIndex={() => {}}>
            {stateLabels.map((label, i) => (
              <Tab key={i} label={label} className={unselectedClass(i)} />
            ))}
          </TabList>
        </section>

        {/* Underline Variant */}
        <section>
          <h3>Underline Variant</h3>

          <h4>Selected</h4>
          <TabList variant="underline" selectedIndex={0} setSelectedIndex={() => {}}>
            {stateLabels.map((label, i) => (
              <Tab
                key={i}
                label={label}
                isSelected
                className={selectedClass(i)}
              />
            ))}
          </TabList>

          <h4>Unselected</h4>
          <TabList variant="underline" selectedIndex={-1} setSelectedIndex={() => {}}>
            {stateLabels.map((label, i) => (
              <Tab key={i} label={label} className={unselectedClass(i)} />
            ))}
          </TabList>
        </section>
      </div>
    );
  },
};