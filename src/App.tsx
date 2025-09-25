// Demo application for the Tabs component.
// Showcases both Pill and Underline variants with list/grid panel layouts.

import { useState } from "react";
import { Tab, TabList, TabPanel, TabPanels } from "./components/tabs";
import { tabsData } from "./data/tabsData";
import "./components/tabs/tabs.scss";

export default function App() {
  const [pillIndex, setPillIndex] = useState(0);
  const [underlineIndex, setUnderlineIndex] = useState(0);

  return (
    <div className="demo">
      <h1 className="demo__title">Tabs Demo</h1>

      {/* Pill Variant */}
      <section className="demo__section">
        <h2 className="demo__heading">Pill Variant</h2>
        <TabList
          variant="pill"
          selectedIndex={pillIndex}
          setSelectedIndex={setPillIndex}
        >
          {tabsData.map((tab, i) => (
            <Tab
              key={i}
              label={tab.label}
              badgeContent={tab.badgeContent}
              badgeVariant={tab.badgeVariant}
              isSelected={pillIndex === i}
              onSelect={() => setPillIndex(i)}
            />
          ))}
        </TabList>
        <TabPanels selectedIndex={pillIndex}>
          {tabsData.map((tab, i) => (
            <TabPanel
              key={i}
              layout={tab.layout}
              content={tab.content}
            />
          ))}
        </TabPanels>
      </section>

      {/* Underline Variant */}
      <section className="demo__section">
        <h2 className="demo__heading">Underline Variant</h2>
        <TabList
          variant="underline"
          selectedIndex={underlineIndex}
          setSelectedIndex={setUnderlineIndex}
        >
          {tabsData.map((tab, i) => (
            <Tab
              key={i}
              label={tab.label}
              badgeContent={tab.badgeContent}
              badgeVariant={tab.badgeVariant}
              isSelected={underlineIndex === i}
              onSelect={() => setUnderlineIndex(i)}
            />
          ))}
        </TabList>
        <TabPanels selectedIndex={underlineIndex}>
          {tabsData.map((tab, i) => (
            <TabPanel
              key={i}
              layout={tab.layout}
              content={tab.content}
            />
          ))}
        </TabPanels>
      </section>
    </div>
  );
}