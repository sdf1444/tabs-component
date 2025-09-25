# Tabs Component

This project implements a reusable, accessible tabs component as part of a design system.  
It follows the provided Figma design, supports pill and underline variants, includes badges, and ensures accessibility best practices.  

---

## ✨ Features

- **Variants**
  - Pill (rounded, filled background)  
  - Underline (border-based)  

- **Accessibility**
  - Keyboard navigation: `ArrowLeft`, `ArrowRight`, `Home`, `End`  
  - Proper ARIA attributes (`tablist`, `tab`, `tabpanel`)  
  - Correct linking with `aria-controls` and `aria-labelledby`  

- **Badges**
  - Optional badges inside tabs  
  - Variants: Neutral, Positive, Negative  

- **Storybook**
  - Interactive stories for Pill and Underline variants  
  - Static state showcase (Default, Hover, Active, Focus)

- **Raw Demo**
  - `index.tsx` + `App.tsx` provide a raw React demo of Pill and Underline variants (outside of Storybook).  

- **Testing**
  - Unit tests with **Vitest + Testing Library**.  
  - Covers rendering, selection, ARIA attributes, visibility of panels, and keyboard navigation.  

---

## 📂 Project Structure

```
src/
components/tabs/
├── Tab.tsx
├── TabList.tsx
├── TabPanel.tsx
├── TabPanels.tsx
├── Badge.tsx
├── tabs.scss
stories/
storybook-states.scss
Tab.stories.tsx
types/
types.ts
__tests__/
Tab.test.tsx
```

---

## Usage Example

```tsx
import { useState } from "react";
import { TabList, Tab, TabPanels, TabPanel } from "./components/tabs";

export const Example = () => {
  const [selected, setSelected] = useState(0);

  return (
    <>
      <TabList variant="pill" selectedIndex={selected} setSelectedIndex={setSelected}>
        <Tab label="Emails" badgeContent="3" />
        <Tab label="Files" badgeVariant="negative" />
        <Tab label="Messages" />
      </TabList>

      <TabPanels selectedIndex={selected}>
        <TabPanel>Inbox content</TabPanel>
        <TabPanel>File list</TabPanel>
        <TabPanel>Chat messages</TabPanel>
      </TabPanels>
    </>
  );
};
```

## Development

## Install dependencies

pnpm install

## Run the raw demo (Vite dev server)

pnpm dev

## Run Storybook

pnpm storybook

## Run Tests

pnpm test

## Approach

## Component-driven design: 
- Split into Tab, TabList, TabPanels, and TabPanel for composability.

## Styling: 
- Written in SCSS with design tokens, no external CSS frameworks.

## Variants: 
- Pill and Underline supported via variant prop.

## Badges: 
- Added as a separate component and injected via props.

## Accessibility: 
- Added ARIA attributes and keyboard navigation support.

## Testing: 
- Implemented with Vitest + Testing Library to verify UI behavior and accessibility.

## Demo & Storybook: 
- Both a raw React demo (App.tsx + index.tsx) and Storybook stories are included.

## Figma File

The design reference is available in the Figma file: https://www.figma.com/design/OclakAGLSXDoMKLFvwLNMP/%F0%9F%92%BB-Design-System-Home-Test---Tabs-Component?node-id=0-1&t=4pG7NN6HKxgxroDz-1

## Notes
- CSS state “hacks” (storybook-states.scss) were used to freeze visual states (hover, focus, active) for design review. These are not used in production, only in Storybook for Figma parity.

- The solution is fully reusable and can be integrated into larger design systems.