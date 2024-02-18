import type { Meta, StoryObj } from "@storybook/react";
import tailwindConfig from "../../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);

const meta: Meta<{
  radius: {
    name: string;
    value: string;
  }[];
}> = {
  title: "design/Radius",
  argTypes: {},
  args: {
    radius: Object.keys(fullConfig.theme.borderRadius).map((name) => {
      const value =
        fullConfig.theme.borderRadius[
          name as keyof typeof fullConfig.theme.borderRadius
        ];
      return {
        name,
        value,
      };
    }),
  },
  render: (args) => (
    <div className="dark:prose-dark prose prose-slate max-w-none">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th className="hidden sm:table-cell">
              <span className="sr-only">Preview</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {args.radius.map(({ name, value }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{value}</td>
              <td className="hidden sm:table-cell">
                <div
                  className="size-20 border bg-card"
                  style={{ borderRadius: value }}
                />
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
