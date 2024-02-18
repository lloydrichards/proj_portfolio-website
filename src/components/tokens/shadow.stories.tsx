import type { Meta, StoryObj } from "@storybook/react";
import tailwindConfig from "../../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(tailwindConfig);

const meta: Meta<{
  shadow: {
    name: string;
    value: string;
  }[];
}> = {
  title: "design/Shadow",
  argTypes: {},
  args: {
    shadow: Object.keys(fullConfig.theme.boxShadow).map((name) => {
      const value =
        fullConfig.theme.boxShadow[
          name as keyof typeof fullConfig.theme.boxShadow
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
          {args.shadow.map(({ name, value }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{value}</td>
              <td className="hidden sm:table-cell">
                <div
                  className="size-20 rounded bg-card"
                  style={{ boxShadow: value }}
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
