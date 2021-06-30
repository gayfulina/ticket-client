import { defineConfig } from 'umi';
import routes from './src/routes';
import theme from './src/theme';

export default defineConfig({
  routes,
  theme,
  favicon: 'favicon.ico_',
  sass: {},
});
