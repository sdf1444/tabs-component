// Demo tab configuration used by App.tsx and Storybook.

export const tabsData = [
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