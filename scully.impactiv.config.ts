import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { getRegexPlugin } from '@gammastream/scully-plugin-regex';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';

const RegexPlugin = getRegexPlugin();
setPluginConfig(RegexPlugin, {
  replacements: [
    {
      from: 'href="mailto:test@example.fr"',
      to: '',
    },
  ],
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'impactiv',
  outDir: './public',
  routes: {},
  defaultPostRenderers: [RegexPlugin],
  puppeteerLaunchOptions: {
    args: ['--no-sandbox', '--disable-setuid--sandbox'],
  },
};
