import gcHeader from '../app/elements/gc-header.mjs';
import gcLangToggle from '../app/elements/gc-langToggle.mjs';

import enhance from '@enhance/ssr'

const html = enhance({
  elements: {
    "gc-header": gcHeader,
    "gc-langToggle": gcLangToggle
  }
})

import { enhanceArgs } from './helpers/enhance.js'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Components/Header',
  tags: ['autodocs'],
  render: (args) => gcHeader( enhanceArgs( html, args ) ),
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    locale: {
      control: { type: "select" },
      options: [ "en", "fr" ],
    }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const English = {
  args: {
    locale: "en",
  },
};

export const Français = {
  args: {
    locale: 'fr',
  },
};