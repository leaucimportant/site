import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';
/** this loads the default render plugin, remove when switching to something else. */

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'impactiv',
  outDir: './dist/static',
  routes: {},
};
