import GcHeader from '../app/elements/gc-header.mjs';
import enhance from '@enhance/ssr'
const html = enhance({
  elements: {
    'gc-header': GcHeader
  }
})
import "./css/theme.min.css";


// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Components/GC-Header',
  tags: ['autodocs'],
  render: (args) => GcHeader(args),
  argTypes: {
    state: {
      options: ['en', 'fr'],
      mapping: {
        en: {
          attrs: {
            variant: 'en'
          }
        },
        fr: {
          attrs: {
            variant: 'fr'
          }
        },
      },
    }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const English = {
  args: {
    html,
    state: {
      attrs: {
        variant: 'en'
      }
    }
  },
};

export const Français = {
  args: {
    html,
    state: {
      attrs: {
        variant: 'fr'
      }
    }
  },
};