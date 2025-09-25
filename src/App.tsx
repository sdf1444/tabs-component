// Demo application for the Tabs component.
// Showcases both Pill and Underline variants with list/grid panel layouts.

import { useState } from "react";
import { Tab, TabList, TabPanel, TabPanels } from "./components/tabs";
import { tabsData } from "./data/tabsData";
import type { TabVariant } from "./types/types";
import "./components/tabs/tabs.scss";

function DemoSection({ variant }: { variant: TabVariant }) {
  const [selected, setSelected] = useState(0);

  return (
    <section className="demo__section">
      <h2 className="demo__heading">
        {variant[0].toUpperCase() + variant.slice(1)} Variant
      </h2>
      <TabList variant={variant} selectedIndex={selected} setSelectedIndex={setSelected}>
        {tabsData.map((tab, i) => (
          <Tab
            key={i}
            label={tab.label}
            badgeContent={tab.badgeContent}
            badgeVariant={tab.badgeVariant}
            isSelected={selected === i}
            onSelect={() => setSelected(i)}
          />
        ))}
      </TabList>
      <TabPanels selectedIndex={selected}>
        {tabsData.map((tab, i) => (
          <TabPanel key={i} layout={tab.layout} content={tab.content} />
        ))}
      </TabPanels>
    </section>
  );
}

export default function App() {
  return (
    <div className="demo">
      <h1 className="demo__title">Tabs Demo</h1>
      <DemoSection variant="pill" />
      <DemoSection variant="underline" />
    </div>
  );
}