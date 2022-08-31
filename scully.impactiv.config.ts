import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'impactiv',
  outDir: './public',
  routes: {},
  puppeteerLaunchOptions: {
    args: ['--no-sandbox', '--disable-setuid--sandbox'],
  },
};
