// Demo application for the Tabs component.
// Showcases both Pill and Underline variants with list/grid panel layouts.

import { useState } from "react";
import { Tab, TabList, TabPanel, TabPanels } from "./components/tabs";
import "./components/tabs/tabs.scss";

const tabs = [
  {
    label: "Emails",
    content: ["✉️ Inbox 1", "✉️ Inbox 2", "✉️ Inbox 3"],
    badgeVariant: "neutral",
    layout: "list",
  },
  {
    label: "Files",
    content: ["📂 Report.pdf", "📂 Design.sketch", "📂 Notes.txt"],
    badgeContent: "Warning",
    badgeVariant: "negative",
    layout: "grid",
  },
  {
    label: "Edits",
    content: ["✏️ Change 1", "✏️ Change 2"],
    badgeVariant: "negative",
    layout: "list",
  },
  {
    label: "Downloads",
    content: ["⬇️ Setup.exe", "⬇️ Installer.pkg", "⬇️ Archive.zip"],
    layout: "grid",
  },
  { label: "Messages", content: ["💬 Chat 1", "💬 Chat 2"], layout: "list" },
];

export default function App() {
  const [pillIndex, setPillIndex] = useState(0);
  const [underlineIndex, setUnderlineIndex] = useState(0);

  return (
    <div className="demo">
      <h1 className="demo__title">Tabs Demo</h1>

      {/* Pill Variant */}
      <section className="demo__section">
        <h2 className="demo__heading">Pill Variant</h2>
        <TabList variant="pill" selectedIndex={pillIndex} setSelectedIndex={setPillIndex}>
          {tabs.map((tab, i) => (
            <Tab
              key={i}
              label={tab.label}
              badgeContent={tab.badgeContent}
              badgeVariant={tab.badgeVariant as any}
              isSelected={pillIndex === i}
              onSelect={() => setPillIndex(i)}
            />
          ))}
        </TabList>
        <TabPanels selectedIndex={pillIndex}>
          {tabs.map((tab, i) => (
            <TabPanel key={i} layout={tab.layout as "list" | "grid"} content={tab.content} />
          ))}
        </TabPanels>
      </section>

      {/* Underline Variant */}
      <section className="demo__section">
        <h2 className="demo__heading">Underline Variant</h2>
        <TabList variant="underline" selectedIndex={underlineIndex} setSelectedIndex={setUnderlineIndex}>
          {tabs.map((tab, i) => (
            <Tab
              key={i}
              label={tab.label}
              badgeContent={tab.badgeContent}
              badgeVariant={tab.badgeVariant as any}
              isSelected={underlineIndex === i}
              onSelect={() => setUnderlineIndex(i)}
            />
          ))}
        </TabList>
        <TabPanels selectedIndex={underlineIndex}>
          {tabs.map((tab, i) => (
            <TabPanel key={i} layout={tab.layout as "list" | "grid"} content={tab.content} />
          ))}
        </TabPanels>
      </section>
    </div>
  );
}