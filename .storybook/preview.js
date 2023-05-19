/** @type { import('@storybook/html').Preview } */
import "../stories/css/theme.min.css";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    locale: "en",
    locales: {
      en_CA: "English",
      fr_CA: "Français",
    },
  },
};

export default preview;
