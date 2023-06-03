import gcLangToggle from '../app/elements/gc-langToggle.mjs';
import enhance from '@enhance/ssr'

const html = enhance({
  elements: {
    'gc-langToggle': gcLangToggle
  }
})

import { enhanceArgs } from './helpers/enhance.js'

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Components/Language toggle',
  tags: ['autodocs'],
  render: (args) => gcLangToggle( enhanceArgs( html, args ) ),
  parameters: {
    layout: "centered"
  },
  argTypes: {
    locale: {
      control: { type: "select" },
      options: [ "en", "fr" ],
    }
  },
};

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
