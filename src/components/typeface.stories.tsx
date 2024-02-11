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

const meta = {
  title: "design/Typeface",
  argTypes: {},
  render: () => (
    <div className="flex flex-col gap-4">
      <h1>Core Typefaces</h1>
      <div className="flex flex-col gap-2 rounded border p-4">
        <p className={typefaceDisplay1()}>Display 1</p>
        <p className={typefaceDisplay2()}>Display 2</p>
        <p className={typefaceHeading1()}>Heading 1</p>
        <p className={typefaceHeading2()}>Heading 2</p>
        <p className={typefaceHeading3()}>Heading 3</p>
        <p className={typefaceHeading4()}>Heading 4</p>
        <p className={typefaceHeading5()}>Heading 5</p>
        <p className={typefaceHeading6()}>Heading 6</p>
        <p className={typefaceBody1()}>Body 1</p>
        <p className={typefaceBody2()}>Body 2</p>
        <p className={typefaceMeta1()}>Meta 1</p>
        <p className={typefaceMeta2()}>Meta 2</p>
      </div>
    </div>
  ),
  parameters: {},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
