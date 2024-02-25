import type { Meta, StoryObj } from "@storybook/react";
import { ColorBlock } from "./color_palette";
import tailwindConfig from "../../../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const meta: Meta<{
  swatch: {
    name: string;
    colors: Record<string, string>;
  }[];
}> = {
  title: "design/Color",
  argTypes: {},
  render: (args) => (
    <table className="w-full table-auto text-left text-sm text-foreground rtl:text-right">
      <thead className="text-x bg-muted uppercase">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Swatch</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {args.swatch.map(({ name, colors }) => (
          <tr key={name} className="border-b bg-card">
            <td className="px-6 py-4">{name}</td>
            <td className="px-6 py-4">
              <div className="flex overflow-hidden rounded-md border shadow">
                {Object.entries(colors).map(([name, value]) => (
                  <ColorBlock key={name} title={name} value={value} />
                ))}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ),
};

export default meta;

const fullConfig = resolveConfig(tailwindConfig);
type ColorKey = keyof typeof fullConfig.theme.colors;

type Story = StoryObj<typeof meta>;

export const Core: Story = {
  args: {
    swatch: [
      {
        name: "mono",
        colors: {
          "50": "hsl(var(--color-mono-050))",
          "100": "hsl(var(--color-mono-100))",
          "200": "hsl(var(--color-mono-200))",
          "300": "hsl(var(--color-mono-300))",
          "400": "hsl(var(--color-mono-400))",
          "500": "hsl(var(--color-mono-500))",
          "600": "hsl(var(--color-mono-600))",
          "700": "hsl(var(--color-mono-700))",
          "800": "hsl(var(--color-mono-800))",
          "900": "hsl(var(--color-mono-900))",
          "950": "hsl(var(--color-mono-950))",
        },
      },
      {
        name: "primary",
        colors: {
          "50": "hsl(var(--color-primary-050))",
          "100": "hsl(var(--color-primary-100))",
          "200": "hsl(var(--color-primary-200))",
          "300": "hsl(var(--color-primary-300))",
          "400": "hsl(var(--color-primary-400))",
          "500": "hsl(var(--color-primary-500))",
          "600": "hsl(var(--color-primary-600))",
          "700": "hsl(var(--color-primary-700))",
          "800": "hsl(var(--color-primary-800))",
          "900": "hsl(var(--color-primary-900))",
          "950": "hsl(var(--color-primary-950))",
        },
      },
      {
        name: "secondary",
        colors: {
          "50": "hsl(var(--color-secondary-050))",
          "100": "hsl(var(--color-secondary-100))",
          "200": "hsl(var(--color-secondary-200))",
          "300": "hsl(var(--color-secondary-300))",
          "400": "hsl(var(--color-secondary-400))",
          "500": "hsl(var(--color-secondary-500))",
          "600": "hsl(var(--color-secondary-600))",
          "700": "hsl(var(--color-secondary-700))",
          "800": "hsl(var(--color-secondary-800))",
          "900": "hsl(var(--color-secondary-900))",
          "950": "hsl(var(--color-secondary-950))",
        },
      },
      {
        name: "ui",
        colors: {
          error: "hsl(var(--color-ui-error))",
          warning: "hsl(var(--color-ui-warning))",
          success: "hsl(var(--color-ui-success))",
          info: "hsl(var(--color-ui-info))",
        },
      },
    ],
  },
};

const functionalSwatch: Array<ColorKey> = [
  "foreground",
  "background",
  "primary",
  "secondary",
  "card",
  "accent",
  "muted",
  "popover",
  "destructive",
  "warning",
  "success",
  "info",
  "input",
  "border",
  "ring",
];

export const Functional: Story = {
  args: {
    swatch: Object.entries(fullConfig.theme.colors)
      .filter((d) => functionalSwatch.includes(d[0] as ColorKey))
      .sort(
        ([a], [b]) =>
          functionalSwatch.indexOf(a as ColorKey) -
          functionalSwatch.indexOf(b as ColorKey),
      )
      .map(([name, colors]) => {
        return {
          name,
          colors: typeof colors === "string" ? { [name]: colors } : colors,
        };
      }),
  },
};
