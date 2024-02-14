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
    <div className="dark:prose-dark prose prose-slate max-w-none">
      <table className="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Swatch</th>
          </tr>
        </thead>
        <tbody>
          {args.swatch.map(({ name, colors }) => (
            <tr key={name}>
              <td>{name}</td>
              <td className="not-prose">
                <div className="mx-2 my-4 flex overflow-x-clip rounded-md border shadow">
                  {Object.entries(colors).map(([name, value]) => (
                    <ColorBlock key={name} title={name} value={value} />
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
};

export default meta;

const fullConfig = resolveConfig(tailwindConfig);

type Story = StoryObj<typeof meta>;

export const Core: Story = {
  args: {
    swatch: [
      {
        name: "White",
        colors: {
          white: "hsl(var(--color-white))",
        },
      },
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

const functionalSwatch: Array<keyof typeof fullConfig.theme.colors> = [
  "accent",
  "card",
  "foreground",
  "background",
  "muted",
  "border",
  "destructive",
  "secondary",
  "primary",
  "popover",
  "input",
  "warning",
  "info",
];

export const Functional: Story = {
  args: {
    swatch: Object.entries(fullConfig.theme.colors)
      .filter((d) =>
        functionalSwatch.includes(d[0] as keyof typeof fullConfig.theme.colors),
      )
      .map(([name, colors]) => {
        return {
          name,
          colors: typeof colors === "string" ? { [name]: colors } : colors,
        };
      }),
  },
};
