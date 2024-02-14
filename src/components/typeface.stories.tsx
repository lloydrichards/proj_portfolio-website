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
    <div className="dark:prose-dark prose prose-slate max-w-none">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Classes</th>
            <th>Typeface</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(args.typeface).map(([name, className]) => (
            <tr key={name}>
              <td>{name}</td>
              <td className="whitespace-pre-wrap">
                {className.replaceAll(" ", "\n")}
              </td>
              <td className="not-prose">
                <p className={className}>{args.children}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Core: Story = {};
