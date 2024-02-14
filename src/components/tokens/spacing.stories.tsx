import type { Meta, StoryObj } from "@storybook/react";
import tailwindConfig from "../../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);

const meta: Meta<{
  scale: {
    name: string;
    size: string;
    pixels: number;
  }[];
}> = {
  title: "design/Padding",
  argTypes: {
    scale: {
      control: {
        type: "object",
      },
    },
  },
  args: {
    scale: Object.keys(fullConfig.theme.spacing)
      .map((name) => {
        const value =
          fullConfig.theme.spacing[
            name as keyof typeof fullConfig.theme.spacing
          ];
        return {
          name,
          size: value,
          pixels: parseFloat(value) * (String(value).endsWith("rem") ? 16 : 1),
        };
      })
      .sort((a, b) => a.pixels - b.pixels),
  },
  render: (args) => (
    <div className="dark:prose-dark prose prose-slate max-w-none">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Pixels</th>
            <th className="hidden sm:table-cell">
              <span className="sr-only">Preview</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {args.scale.map(({ name, size, pixels }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{size}</td>
              <td>{pixels}px</td>
              <td className="hidden sm:table-cell">
                <div className="border bg-muted">
                  <div className="h-4 bg-primary" style={{ width: size }} />
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

type Story = StoryObj<typeof meta>;

export const Core: Story = {};
