import gcHeader from '../app/elements/gc-header.mjs';
import enhance from '@enhance/ssr'

const html = enhance({
  elements: {
    'gc-header': gcHeader
  }
})

import { enhanceArgs } from './helpers/enhance.js'
import "./css/theme.min.css";


// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Components/GC-Header',
  tags: ['autodocs'],
  render: (args) => gcHeader( enhanceArgs( html, args ) ),
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