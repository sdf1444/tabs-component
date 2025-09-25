import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Tab } from "../components/tabs/Tab";
import { TabList } from "../components/tabs/TabList";
import { TabPanel } from "../components/tabs/TabPanel";
import { TabPanels } from "../components/tabs/TabPanels";

describe("Tabs system", () => {
  it("renders multiple tabs with the correct labels", () => {
    render(
      <TabList selectedIndex={0} setSelectedIndex={() => {}}>
        <Tab label="Overview" />
        <Tab label="Details" />
      </TabList>
    );

    expect(screen.getByRole("tab", { name: "Overview" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Details" })).toBeInTheDocument();
  });

  it("calls setSelectedIndex when a tab is clicked", () => {
    const mockSetIndex = vi.fn();
    render(
      <TabList selectedIndex={0} setSelectedIndex={mockSetIndex}>
        <Tab label="First" />
        <Tab label="Second" />
      </TabList>
    );

    fireEvent.click(screen.getByRole("tab", { name: "Second" }));
    expect(mockSetIndex).toHaveBeenCalledWith(1);
  });

  it("only shows the content of the active TabPanel", () => {
    render(
      <TabPanels selectedIndex={0}>
        <TabPanel index={0} isSelected>
          Panel A
        </TabPanel>
        <TabPanel index={1} isSelected={false}>
          Panel B
        </TabPanel>
      </TabPanels>
    );

    expect(screen.getByText("Panel A")).toBeVisible();
    expect(screen.queryByText("Panel B")).not.toBeVisible();
  });

  it("applies correct aria attributes to tabs", () => {
    render(
      <TabList selectedIndex={0} setSelectedIndex={() => {}}>
        <Tab label="Tab One" index={0} />
        <Tab label="Tab Two" index={1} />
      </TabList>
    );

    const tabOne = screen.getByRole("tab", { name: "Tab One" });
    expect(tabOne).toHaveAttribute("id", "tab-0");
    expect(tabOne).toHaveAttribute("aria-selected", "true");

    const tabTwo = screen.getByRole("tab", { name: "Tab Two" });
    expect(tabTwo).toHaveAttribute("id", "tab-1");
    expect(tabTwo).toHaveAttribute("aria-selected", "false");
  });

  it("links tab panels with aria-labelledby", () => {
    render(
      <TabPanels selectedIndex={0}>
        <TabPanel index={0} isSelected>
          Content A
        </TabPanel>
        <TabPanel index={1} isSelected={false}>
          Content B
        </TabPanel>
      </TabPanels>
    );

    const panel = screen.getByRole("tabpanel");
    expect(panel).toHaveAttribute("id", "tabpanel-0");
    expect(panel).toHaveAttribute("aria-labelledby", "tab-0");
  });

  it("supports keyboard navigation with ArrowRight", () => {
    const mockSetIndex = vi.fn();
    render(
      <TabList selectedIndex={0} setSelectedIndex={mockSetIndex}>
        <Tab label="Alpha" index={0} />
        <Tab label="Beta" index={1} />
      </TabList>
    );

    const firstTab = screen.getByRole("tab", { name: "Alpha" });
    fireEvent.keyDown(firstTab, { key: "ArrowRight" });
    expect(mockSetIndex).toHaveBeenCalledWith(1);
  });
});