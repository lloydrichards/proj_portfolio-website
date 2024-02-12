import type { Meta, StoryObj } from "@storybook/react";
import { ColorPalette } from "./color_palette";
import { ColorItem } from "./color_item";

const meta = {
  title: "design/Colors",
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Core: Story = {
  render: () => (
    <ColorPalette>
      <ColorItem
        title="Primative Swatch"
        subtitle="A set of primative colors for text, background, and borders."
        colors={{
          white: ["--color-white", "hsl(var(--color-white))"],
        }}
      />
      <ColorItem
        title="Mono Swatch"
        subtitle="A set of neutral colors for text, background, and borders."
        colors={{
          "50": ["--color-mono-050", "hsl(var(--color-mono-050))"],
          "100": ["--color-mono-100", "hsl(var(--color-mono-100))"],
          "200": ["--color-mono-200", "hsl(var(--color-mono-200))"],
          "300": ["--color-mono-300", "hsl(var(--color-mono-300))"],
          "400": ["--color-mono-400", "hsl(var(--color-mono-400))"],
          "500": ["--color-mono-500", "hsl(var(--color-mono-500))"],
          "600": ["--color-mono-600", "hsl(var(--color-mono-600))"],
          "700": ["--color-mono-700", "hsl(var(--color-mono-700))"],
          "800": ["--color-mono-800", "hsl(var(--color-mono-800))"],
          "900": ["--color-mono-900", "hsl(var(--color-mono-900))"],
        }}
      />
      <ColorItem
        title="Primary Swatch"
        subtitle="A set of primary colors for buttons, links, and accents."
        colors={{
          "50": ["--color-primary-050", "hsl(var(--color-primary-050))"],
          "100": ["--color-primary-100", "hsl(var(--color-primary-100))"],
          "200": ["--color-primary-200", "hsl(var(--color-primary-200))"],
          "300": ["--color-primary-300", "hsl(var(--color-primary-300))"],
          "400": ["--color-primary-400", "hsl(var(--color-primary-400))"],
          "500": ["--color-primary-500", "hsl(var(--color-primary-500))"],
          "600": ["--color-primary-600", "hsl(var(--color-primary-600))"],
          "700": ["--color-primary-700", "hsl(var(--color-primary-700))"],
          "800": ["--color-primary-800", "hsl(var(--color-primary-800))"],
          "900": ["--color-primary-900", "hsl(var(--color-primary-900))"],
        }}
      />
      <ColorItem
        title="Secondary Swatch"
        subtitle="A set of secondary colors for alternate buttons, and accents."
        colors={{
          "50": ["--color-secondary-050", "hsl(var(--color-secondary-050))"],
          "100": ["--color-secondary-100", "hsl(var(--color-secondary-100))"],
          "200": ["--color-secondary-200", "hsl(var(--color-secondary-200))"],
          "300": ["--color-secondary-300", "hsl(var(--color-secondary-300))"],
          "400": ["--color-secondary-400", "hsl(var(--color-secondary-400))"],
          "500": ["--color-secondary-500", "hsl(var(--color-secondary-500))"],
          "600": ["--color-secondary-600", "hsl(var(--color-secondary-600))"],
          "700": ["--color-secondary-700", "hsl(var(--color-secondary-700))"],
          "800": ["--color-secondary-800", "hsl(var(--color-secondary-800))"],
          "900": ["--color-secondary-900", "hsl(var(--color-secondary-900))"],
        }}
      />
      <ColorItem
        title="UI Swatch"
        subtitle="A set of UI colors for warnings, errors, and alerts."
        colors={{
          error: ["--color-ui-error", "hsl(var(--color-ui-error))"],
          warning: ["--color-ui-warning", "hsl(var(--color-ui-warning))"],
          success: ["--color-ui-success", "hsl(var(--color-ui-success))"],
          info: ["--color-ui-info", "hsl(var(--color-ui-info))"],
        }}
      />
    </ColorPalette>
  ),
};

export const Functional: Story = {
  render: () => (
    <ColorPalette>
      <ColorItem
        title="body"
        subtitle="Default background and text color of <body />...etc"
        colors={{
          background: ["--color-white", "hsl(var(--background))"],
          foreground: ["--color-mono-900", "hsl(var(--foreground))"],
        }}
      />
      <ColorItem
        title="primary"
        subtitle="Primary colors for <Button />"
        colors={{
          DEFAULT: ["--color-primary-700", "hsl(var(--primary))"],
          foreground: ["--color-mono-050", "hsl(var(--primary-foreground))"],
        }}
      />
      <ColorItem
        title="secondary"
        subtitle="Secondary colors for <Button />"
        colors={{
          DEFAULT: ["--color-mono-100", "hsl(var(--secondary))"],
          foreground: ["--color-mono-900", "hsl(var(--secondary-foreground))"],
        }}
      />
      <ColorItem
        title="card"
        subtitle="Background color for <Card />"
        colors={{
          DEFAULT: ["--background", "hsl(var(--card))"],
          foreground: ["--color-mono-900", "hsl(var(--card-foreground))"],
        }}
      />
      <ColorItem
        title="popover"
        subtitle="Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover />"
        colors={{
          DEFAULT: ["--color-mono-050", "hsl(var(--popover))"],
          foreground: ["--color-mono-900", "hsl(var(--popover-foreground))"],
        }}
      />
      <ColorItem
        title="muted"
        subtitle="Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch />"
        colors={{
          DEFAULT: ["--color-mono-100", "hsl(var(--muted))"],
          foreground: ["--color-mono-900", "hsl(var(--muted-foreground))"],
        }}
      />
      <ColorItem
        title="accent"
        subtitle="Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc"
        colors={{
          DEFAULT: ["--color-mono-100", "hsl(var(--accent))"],
          foreground: ["--color-mono-900", "hsl(var(--accent-foreground))"],
        }}
      />
      <ColorItem
        title="destructive"
        subtitle="Used for destructive actions such as <Button variant='destructive'>"
        colors={{
          DEFAULT: ["--color-ui-error", "hsl(var(--destructive))"],
          foreground: [
            "--color-mono-050",
            "hsl(var(--destructive-foreground))",
          ],
        }}
      />
      <ColorItem
        title="warning"
        subtitle="Used for warning actions such as Alerts or Toasts"
        colors={{
          DEFAULT: ["--color-ui-warning", "hsl(var(--warning))"],
          foreground: ["--color-mono-050", "hsl(var(--warning-foreground))"],
        }}
      />
      <ColorItem
        title="success"
        subtitle="Used for success actions such as Alerts or Toasts"
        colors={{
          DEFAULT: ["--color-ui-success", "hsl(var(--success))"],
          foreground: ["--color-mono-050", "hsl(var(--success-foreground))"],
        }}
      />
      <ColorItem
        title="info"
        subtitle="Used for informative actions such as Alerts or Toasts"
        colors={{
          DEFAULT: ["--color-ui-info", "hsl(var(--info))"],
          foreground: ["--color-mono-050", "hsl(var(--info-foreground))"],
        }}
      />
      <ColorItem
        title="border"
        subtitle="Default border color"
        colors={{ border: ["--color-mono-200", "hsl(var(--border))"] }}
      />
      <ColorItem
        title="input"
        subtitle="Border color for inputs such as <Input />, <Select />, <Textarea />"
        colors={{ input: ["--color-mono-200", "hsl(var(--input))"] }}
      />
      <ColorItem
        title="ring"
        subtitle="Used for focus ring"
        colors={{ ring: ["--color-primary-400", "hsl(var(--ring))"] }}
      />
    </ColorPalette>
  ),
};
