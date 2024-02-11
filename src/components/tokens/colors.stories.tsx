import type { Meta, StoryObj } from "@storybook/react";
import { ColorPalette } from "./color_palette";
import { ColorItem } from "./color_item";

const meta = {
  title: "design/Colors",
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Functional: Story = {
  render: () => (
    <ColorPalette>
      <ColorItem
        title="background"
        subtitle="Default background color of <body />...etc"
        colors={{
          background: ["--background", "hsl(var(--background))"],
          foreground: ["--foreground", "hsl(var(--foreground))"],
        }}
      />
      <ColorItem
        title="muted"
        subtitle="Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />"
        colors={{
          DEFAULT: ["--muted", "hsl(var(--muted))"],
          foreground: ["--muted-foreground", "hsl(var(--muted-foreground))"],
        }}
      />
      <ColorItem
        title="card"
        subtitle="Background color for <Card />"
        colors={{
          DEFAULT: ["--card", "hsl(var(--card))"],
          foreground: ["--card-foreground", "hsl(var(--card-foreground))"],
        }}
      />
      <ColorItem
        title="popover"
        subtitle="Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />"
        colors={{
          DEFAULT: ["--popover", "hsl(var(--popover))"],
          foreground: [
            "--popover-foreground",
            "hsl(var(--popover-foreground))",
          ],
        }}
      />
      <ColorItem
        title="border"
        subtitle="Default border color"
        colors={{ border: ["--border", "hsl(var(--border))"] }}
      />
      <ColorItem
        title="input"
        subtitle="Border color for inputs such as <Input />, <Select />, <Textarea />"
        colors={{ input: ["--input", "hsl(var(--input))"] }}
      />
      <ColorItem
        title="primary"
        subtitle="Primary colors for <Button />"
        colors={{
          DEFAULT: ["--primary", "hsl(var(--primary))"],
          foreground: [
            "--primary-foreground",
            "hsl(var(--primary-foreground))",
          ],
        }}
      />
      <ColorItem
        title="secondary"
        subtitle="Secondary colors for <Button />"
        colors={{
          DEFAULT: ["--secondary", "hsl(var(--secondary))"],
          foreground: [
            "--secondary-foreground",
            "hsl(var(--secondary-foreground))",
          ],
        }}
      />
      <ColorItem
        title="accent"
        subtitle="Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc"
        colors={{
          DEFAULT: ["--accent", "hsl(var(--accent))"],
          foreground: ["--accent-foreground", "hsl(var(--accent-foreground))"],
        }}
      />
      <ColorItem
        title="destructive"
        subtitle="Used for destructive actions such as <Button variant='destructive'>"
        colors={{
          DEFAULT: ["--destructive", "hsl(var(--destructive))"],
          foreground: [
            "--destructive-foreground",
            "hsl(var(--destructive-foreground))",
          ],
        }}
      />
      <ColorItem
        title="ring"
        subtitle="Used for focus ring"
        colors={{ ring: ["--ring", "hsl(var(--ring))"] }}
      />
    </ColorPalette>
  ),
};
