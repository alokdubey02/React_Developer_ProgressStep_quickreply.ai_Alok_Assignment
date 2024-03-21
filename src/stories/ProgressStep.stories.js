import React from "react";
import ProgressStep from "../components/ProgressStep";

export default {
  title: "Components/ProgressStep",
  component: ProgressStep,
  argTypes: {
    success: { control: "boolean" },
    position: {
      control: { type: "radio", options: ["start", "middle", "end"] },
    },
    stepName: { control: "text" },
    description: { control: "text" },
    editDescription: { control: "boolean" },
    line: { control: "boolean" },
    editText: { control: "text" },
    type: { control: { type: "radio", options: ["number", "line"] } },
    editNumber: { control: "boolean" },
  },
};

const Template = (args) => <ProgressStep {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: "horizontal",
  steps: [
    { title: "Step 1", description: "Step 1 description" },
    { title: "Step 2", description: "Step 2 description" },
    { title: "Step 3", description: "Step 3 description" },
  ],
  currentStepIndex: 0,
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: "vertical",
  steps: [
    { title: "Step 1", description: "Step 1 description" },
    { title: "Step 2", description: "Step 2 description" },
    { title: "Step 3", description: "Step 3 description" },
  ],
  currentStepIndex: 1,
};

export const Cell = Template.bind({});
Cell.args = {
  orientation: "cell",
  steps: [{ type: "number" }, { type: "line" }, { type: "number" }],
  currentStepIndex: 1,
};
