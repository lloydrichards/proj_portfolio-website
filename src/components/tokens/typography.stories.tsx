import type { Meta, StoryObj } from "@storybook/react";
import tailwindConfig from "../../../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";
import { CSSProperties } from "react";

const fullConfig = resolveConfig(tailwindConfig);

const meta: Meta<{
  children: string;
  key: keyof CSSProperties;
  property: {
    name: string;
    value: string;
  }[];
}> = {
  title: "design/Typography",
  argTypes: {},
  args: {
    children: "Typeface",
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
          {args.property.map(({ name, value }) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{value}</td>
              <td className="hidden sm:table-cell">
                <p className="" style={{ [args.key]: value }}>
                  {args.children}
                </p>
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

export const FontFamily: Story = {
  args: {
    key: "fontFamily",
    property: Object.keys(fullConfig.theme.fontFamily).map((name) => {
      const value =
        fullConfig.theme.fontFamily[
          name as keyof typeof fullConfig.theme.fontFamily
        ];
      return {
        name,
        value: Array.isArray(value) ? value.join(", ") : value,
      };
    }),
  },
};
export const FontSize: Story = {
  args: {
    key: "fontSize",
    property: Object.keys(fullConfig.theme.fontSize).map((name) => {
      const value =
        fullConfig.theme.fontSize[
          name as keyof typeof fullConfig.theme.fontSize
        ];
      return {
        name,
        value: value[0],
      };
    }),
  },
};
export const FontWeight: Story = {
  args: {
    key: "fontWeight",
    property: Object.keys(fullConfig.theme.fontWeight).map((name) => {
      const value =
        fullConfig.theme.fontWeight[
          name as keyof typeof fullConfig.theme.fontWeight
        ];
      return {
        name,
        value: Array.isArray(value) ? value.join(", ") : value,
      };
    }),
  },
};
