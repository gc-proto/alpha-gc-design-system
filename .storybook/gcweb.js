// .storybook/YourTheme.js

import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Noto Sans", sans-serif',
  fontCode: 'Menlo, Monaco, Consolas, "Courier New", monospace',

  brandTitle: 'Canada.ca',
  brandUrl: 'https://design.canada.ca',
  brandImage: 'https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/sig-blk-en.svg',
  brandTarget: '_self',

  //
  colorPrimary: '#ffffff',
  colorSecondary: '#26374a',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#26374a',
  appBorderRadius: 4,

  // Text colors
  textColor: '#333333',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#26374a',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});