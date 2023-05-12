// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import GCWeb from './gcweb';

addons.setConfig({
  theme: GCWeb,
});