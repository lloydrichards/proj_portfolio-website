import type { Meta, StoryObj } from "@storybook/react";
import {
  typefaceBody1,
  typefaceBody2,
  typefaceDisplay1,
  typefaceDisplay2,
  typefaceHeading1,
  typefaceHeading2,
  typefaceHeading3,
  typefaceHeading4,
  typefaceHeading5,
  typefaceHeading6,
  typefaceMeta1,
  typefaceMeta2,
} from "./typeface";

const meta: Meta<{
  typeface: Record<string, string>;
  children: string;
}> = {
  title: "design/Typeface",
  argTypes: {},
  args: {
    children: "Typeface",
    typeface: {
      "Display 1": typefaceDisplay1(),
      "Display 2": typefaceDisplay2(),
      "Heading 1": typefaceHeading1(),
      "Heading 2": typefaceHeading2(),
      "Heading 3": typefaceHeading3(),
      "Heading 4": typefaceHeading4(),
      "Heading 5": typefaceHeading5(),
      "Heading 6": typefaceHeading6(),
      "Body 1": typefaceBody1(),
      "Body 2": typefaceBody2(),
      "Meta 1": typefaceMeta1(),
      "Meta 2": typefaceMeta2(),
    },
  },
  render: (args) => (
    <table className="w-full table-auto text-left text-sm text-foreground rtl:text-right">
      <thead className="text-xs bg-muted uppercase">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="hidden px-6 py-3 sm:table-cell">
            Utilities
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Preview</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(args.typeface).map(([name, className]) => {
          const resolvedValue = className.replaceAll(" ", "\n");
          return (
            <tr key={name} className="border-b bg-card">
              <td className="px-6 py-4">{name}</td>
              <td className="hidden whitespace-pre-wrap px-6 py-4 sm:table-cell">
                {resolvedValue}
              </td>
              <td className="px-6 py-4">
                <p className={className}>{args.children}</p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ),
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Core: Story = {};
