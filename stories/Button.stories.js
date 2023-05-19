import { createButton } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/html/writing-stories/introduction
export default {
  title: "Components/Buttons",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({ label, ...args });
  },
  parameters: {
    layout: "centered"
  },
  argTypes: {
    label: { 
      control: "text",
      description: "Provides a indication of the tiggered action",
  },
    onClick: { action: "onClick" },
    task: {
      description: "Provides visual weight and identifies the action in a set of buttons", 
      control: { type: "select"},
      options: [ "primary", "call-to-action", "default", "success", "info", "warning", "danger", "link" ],
    },
    size: {
      control: { type: "select" },
      options: [ "xs", "sm", "md", "lg" ],
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/html/writing-stories/args
export const Primary = {
  args: {
    task: "primary",
    label: "Button",
  },
};

export const Supertask = {
  args: {
    task: "call-to-action",
    label: "Supertask"
  }
}

export const Default = {
  args: {
    task: "default",
    label: "Button",
  },
};

export const Large = {
  args: {
    task: "default",
    size: "lg",
    label: "Button",
  },
};

export const Small = {
  args: {
    task: "default",
    size: "sm",
    label: "Button",
  },
};

export const Extra_small = {
  args: {
    task: "default",
    size: "xs",
    label: "Button",
  },
};
