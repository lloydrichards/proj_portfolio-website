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
    <table className="text-foreground w-full table-auto text-left text-sm rtl:text-right">
      <thead className="bg-muted text-xs uppercase">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="hidden px-6 py-3 sm:table-cell">
            Size
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Preview</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {args.radius.map(({ name, value }) => {
          const style = window.getComputedStyle(document.body);
          const variable = value.match(/var\(([^)]+)\)/)?.[1] ?? "";
          const resolved = style.getPropertyValue(variable);
          const resolvedValue = value.replace(/var\(--(.*?)\)/, resolved);
          return (
            <tr key={name} className="bg-card border-b">
              <td className="px-6 py-4">{name}</td>
              <td className="hidden px-6 py-4 sm:table-cell">
                {resolvedValue}
              </td>
              <td className="px-6 py-4">
                <div
                  className="bg-background size-20 border-2"
                  style={{ borderRadius: value }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Core: Story = {};
